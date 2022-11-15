<?php

namespace Soda\EFA;

use Exception;
use PosterEditor\PosterEditor;

if (php_sapi_name() === 'cli') {
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

/**
 * Upload and save canvas posters to show them as sharing results.
 *
 * @author  Anton Lukin
 * @version 1.0
 * @license MIT License
 */
final class Sharing
{
    /**
     * Url to project home page.
     */
    public $url = 'https://clash.notset.org';

    /**
     * Current file directory.
     */
    public $dir = __DIR__;

    /**
     * Redirect page to desired location;
     *
     * @param string $location New page location.
     * @param int    $status   HTTP header status. By default: 301.
     */
    private function redirect_page($location, $status = 301) {
        header("Location: {$location}", true, $status);
        exit;
    }

    /**
     * Generate unique poster name.
     */
    private function get_unique_name() {
        return sha1(uniqid('', true));
    }

    /**
     * Decode base64 image from POST request.
     *
     * @param string $image Base64 encoded png image.
     */
    private function decode_image($image) {
        return base64_decode(str_replace('data:image/jpeg;base64,', '', $image));
    }

    /**
     * Send JSON and exit.
     *
     * @param int   $status HTTP status code.
     * @param array $output Data to response.
     */
    private function send_json($output, $status) {
        http_response_code($status);

        header('Content-Type: application/json');
        echo json_encode($output);

        exit;
    }

    /**
     * Send JSON width error message.
     *
     * @param mixed $data   Error data.
     * @param int   $status HTTP status code. By default: 500.
     */
    private function send_json_error($data, $status = 500) {
        $output = array(
            'success' => false,
            'data'    => $data,
        );

        return $this->send_json($output, $status);
    }

    /**
      * Send JSON with success message.
     *
     * @param mixed $data   Success data.
     * @param int   $status HTTP status code. By default: 500.
     */
    private function send_json_success($data) {
        $output = array(
            'success' => true,
            'data'    => $data,
        );

        return $this->send_json($output, 200);
    }

    /**
     * Upload and generate posters from js FormData.
     */
    private function upload_poster() {
        if (empty($_POST['poster'])) {
            $this->send_json_error('The poster field should be defined', 400);
        }

        $image = $this->decode_image($_POST['poster']);

        if (false === $image) {
            $this->send_json_error('Wrong base64 image format', 400);
        }

        $name = $this->get_unique_name();

        try {
            $work = new PosterEditor();
            $work->make($image)->downsize(1920, null);
            $work->save($this->dir . "/works/{$name}.jpg", null, 95);

            $card = new PosterEditor();
            $card->canvas(1024, 1077);

            $work->fit(920, 540);

            $card->insert($work,
                array(
                    'y' => 54,
                )
            );

            if (!empty($_POST['title'])) {
                $options = array(
                    'x' => 54,
                    'y' => 630,
                    'width' => 920,
                    'height' => 340,
                    'fontpath'   => $this->dir . '/assets/montserrat-bold.ttf',
                    'fontsize'   => 48,
                    'lineheight' => 1.5,
                    'color'      => '#000000',
                );

                $card->text($_POST['title'], $options, $boundary);
            }

            $margin = isset($boundary['height']) ? $boundary['height'] + 660 : 630;

            if (!empty($_POST['text'])) {
                $options = array(
                    'x' => 54,
                    'y' => $margin,
                    'width' => 920,
                    'fontpath'   => $this->dir . '/assets/montserrat-medium.ttf',
                    'fontsize'   => 24,
                    'lineheight' => 1.5,
                    'color'      => '#000000',
                );

                $card->text($_POST['text'], $options);
            }

            $card->rotate(5);

            $poster = new PosterEditor();
            $poster->make($this->dir . '/assets/background.png');

            $poster->insert($card)->fit(1200, 630);
            $poster->save($this->dir . "/posters/{$name}.png");

            $data = array(
                'link'   => $this->url . "/share/{$name}/",
                'work'   => $this->url . "/share/works/{$name}.jpg",
                'poster' => $this->url . "/share/posters/{$name}.png",
            );

            $this->send_json_success($data);

        } catch(Exception $e) {
            $this->send_json_error('Failed to save poster');
        }
    }

    /**
     * Show posters galllery
     */
    private function show_gallery() {
        $posters = array();

        $files = glob('posters/*.png');

        usort($files, function( $a, $b ) {
            return filemtime($b) - filemtime($a);
        });

        foreach ($files as $name) {
            $posters[] = $this->url . "/share/{$name}";
        }

        $total = ceil(count($posters) / 30);

        // Get page from query param
        $page = isset($_GET['page']) ? intval($_GET['page']) : 1;

        $posters = array_slice($posters, ($page - 1) * 30, 30);

        include_once __DIR__ . '/assets/gallery.php';
    }

    /**
     * Show tags template.
     *
     * @param string $name Poster name.
     */
    private function show_tags($name) {
        if (!file_exists($this->dir . "/posters/{$name}.png")) {
            $this->redirect_page($this->url);
        }

        $meta = array(
            'poster'      => $this->url . "/share/posters/{$name}.png",
            'work'        => $this->url . "/share/works/{$name}.jpg",
            'title'       => 'Глядите, это мое произведение!',
            'description' => 'Это великолепие создано на сайте онлайн-музея ЖЭК-арта dvor.digital.',
        );

        extract($meta);

        include_once __DIR__ . '/assets/page.php';
    }

    /**
     * Routing an incoming request.
     *
     * @param string $action Request control parameter.
     */
    private function route_request($action) {
        if ('upload' === $action) {
            return $this->upload_poster();
        }

        if ('gallery' === $action) {
            return $this->show_gallery();
        }

        $this->show_tags($action);
    }

    /**
     * Start with server request uri.
     *
     * @param string $request Request URI.
     */
    public function init($request) {
        $args = explode('/', trim($request, '/'));

        if (empty($args[1])) {
            $this->redirect_page($this->url);
        }

        $this->route_request($args[1]);
    }
}

(new Sharing)->init($_SERVER['REQUEST_URI']);

