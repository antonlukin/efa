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
        $data = json_decode(file_get_contents('php://input'), true);

        if (empty($data)) {
            $this->send_json_error('Wrong data format', 400);
        }

        $name = $this->get_unique_name();

        try {
            $work = new PosterEditor();
            $work->make(__DIR__ . '/assets/tshirt.png');

            $work->text(mb_strtoupper($data['name']), array(
                'x' => 160,
                'y' => 185,
                'width' => 400,
                'height' => 200,
                'fontpath'   => $this->dir . '/assets/damn.ttf',
                'fontsize'   => 90,
                'lineheight' => 1.5,
                'horizontal' => 'center',
                'color'      => '#000000',
            ));


            $work->text($data['number'], array(
                'x' => 160,
                'y' => 295,
                'width' => 400,
                'height' => 400,
                'fontpath'   => $this->dir . '/assets/damn.ttf',
                'fontsize'   => 240,
                'lineheight' => 1.5,
                'horizontal' => 'center',
                'color'      => '#000000',
            ));

            $story = new PosterEditor();
            $story->make($this->dir . '/assets/story.png');

            $story->insert($work, array('x' => 120, 'y' => 700));
            $story->save($this->dir . "/stories/{$name}.jpg", 70);

            $work->downsize(null, 540);
            $work->save($this->dir . "/works/{$name}.png");

            $poster = new PosterEditor();
            $poster->make($this->dir . '/assets/poster.png');

            $poster->insert($work, array('x' => 120, 'y' => 40));
            $poster->save($this->dir . "/posters/{$name}.jpg", 90);

            $response = [
                'work' => $this->url . "/share/works/{$name}.png",
                'poster' => $this->url . "/share/posters/{$name}.jpg",
                'story' => $this->url . "/share/stories/{$name}.jpg",
            ];

            $this->send_json_success($response);
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

