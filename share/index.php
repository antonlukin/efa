<?php

namespace Soda\EFA;

use Exception;
use PDO;
use Dotenv;
use PosterEditor\PosterEditor;

if (php_sapi_name() === 'cli') {
//    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

/**
 * Save result to database and show sharing psoters
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
    public $url = '/';

    /**
     * Current file directory.
     */
    public $dir = __DIR__;

    /**
     * SQLite storage instance.
     */
    private $db = null;

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
    private function get_unique_key() {
        return sha1(uniqid('', true));
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
    private function send_json_success($data = null) {
        $output = array(
            'success' => true,
            'data'    => $data,
        );

        return $this->send_json($output, 200);
    }

    /**
     * Create SQLite instance.
     */
    private function connect_database() {
        if ($this->db !== null) {
            return $this->db;
        }

        try {
            $this->db = new PDO('sqlite://' . __DIR__ . '/database/users.db');

            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            $this->db->query("CREATE TABLE IF NOT EXISTS users (name TEXT, number TEXT, lang TEXT, key TEXT, created TEXT)");
        } catch(Exception $e) {
           $this->send_json_error('Database connection error', 500);
        }

        return $this->db;
    }

    /**
     * Get standings data
     */
    private function get_standings() {
        $db = $this->connect_database();

         try {
            $select = $db->query('SELECT name, number FROM users ORDER BY rowid DESC');
            $results = $select->fetchAll();
         } catch(Exception $e) {
           $this->send_json_error('Error occured while selecting standings from database', 500);
        }

        $this->send_json_success($results);
    }

    /**
     * Insert user into database
     *
     * @param object $data User data
     * @param string $key  Unique key
     */
    private function insert_user($data, $key) {
        $db = $this->connect_database();

        // Get current datetime
        $created = date('Y-m-d H:i:s');

        try {
            $insert = $db->prepare('INSERT INTO users (name, number, lang, key, created) VALUES (?, ?, ?, ?, ?)');
            $insert->execute(array($data->name, $data->number, $data->lang, $key, $created));
        } catch(Exception $e) {
           $this->send_json_error('Error occured while inserting new user to database', 500);
        }
    }

    /**
     * Validate and handle new user
     */
    private function upload_data() {
        $data = json_decode(file_get_contents('php://input'), false);

        if (empty($data)) {
            $this->send_json_error('Wrong data format', 400);
        }

        if (!isset($data->name, $data->number, $data->lang)) {
            $this->send_json_error('Wrong data format', 400);
        }

        if (!preg_match('~^[A-Za-z0-9-_\s]{1,14}$~u', $data->name)) {
            $this->send_json_error('Wrong name format', 400);
        }

        if (!preg_match('~^[0-9]{1,2}$~', $data->number)) {
            $this->send_json_error('Wrong number format', 400);
        }

        if (!in_array($data->lang, array('en', 'es'), true)) {
            $this->send_json_error('Wrong lang format', 400);
        }

        $key = $this->get_unique_key();

        $this->insert_user($data, $key);
        $this->create_posters($data, $key);
    }

    /**
     * Upload and generate posters from JSON data
     *
     * @param object $data User data
     * @param string $key  Unique key
     */
    private function create_posters($data, $key) {
        try {
            $work = new PosterEditor();
            $work->make(__DIR__ . '/assets/tshirt.png');

            $work->text(mb_strtoupper($data->name), array(
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

            $work->text($data->number, array(
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
            $story->make($this->dir . '/assets/story.jpg');

            $story->insert($work, array('x' => 120, 'y' => 950));
            $story->save($this->dir . "/stories/{$key}.jpg", 70);

            $work->downsize(null, 540);
            $work->save($this->dir . "/works/{$key}.png");

            $poster = new PosterEditor();
            $poster->make($this->dir . "/assets/poster-{$data->lang}.png");

            $poster->insert($work, array('x' => 120, 'y' => 40));
            $poster->save($this->dir . "/posters/{$key}.jpg", 90);

            $response = [
                'key'   => $key,
                'work'  => $this->url . "/share/works/{$key}.png",
                'story' => $this->url . "/share/stories/{$key}.jpg",
            ];

            $this->send_json_success($response);
        } catch(Exception $e) {
            $this->send_json_error('Failed to save poster');
        }
    }

    /**
     * Delete user by rowid
     *
     * @param int $rowid Row id to delete from users
     */
    private function delete_user($rowid) {
        $db = $this->connect_database();

        try {
            $delete = $db->query('DELETE FROM users WHERE rowid = ?');
            $delete->execute(array($rowid));
        } catch(Exception $e) {
           $this->send_json_error('Error occured while deleteing user from database', 500);
        }

        $this->send_json_success($rowid);
    }

    /**
     * Show posters galllery
     */
    private function show_dashboard() {
        if (!empty($_POST['delete'])) {
            return $this->delete_user(intval($_POST['delete']));
        }

        $db = $this->connect_database();

        $select = $db->query('SELECT rowid, * FROM users ORDER BY rowid DESC');
        $results = $select->fetchAll();

        $amount = array_count_values(array_column($results, 'lang'));

        include_once __DIR__ . '/assets/dashboard.php';
    }

    /**
     * Show tags template.
     *
     * @param string $name Poster name.
     */
    private function show_tags($name) {
        if (!file_exists($this->dir . "/posters/{$name}.jpg")) {
            $this->redirect_page($this->url);
        }

        $meta = array(
            'poster'      => $this->url . "/share/posters/{$name}.jpg",
            'title'       => 'EFA World Cup 2022',
            'description' => 'Eco-friendly activities contest',
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
            return $this->upload_data();
        }

        if ('standings' === $action) {
            return $this->get_standings();
        }

        if ('dashboard' === $action) {
            return $this->show_dashboard();
        }

        $this->show_tags($action);
    }

    /**
     * Start with server request uri.
     *
     * @param string $request Request URI.
     */
    public function init($request) {
        $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
        $dotenv->load();

        if (isset($_ENV['REACT_APP_PROJECT_URL'])) {
            $this->url = $_ENV['REACT_APP_PROJECT_URL'];
        }

        $args = explode('/', trim($request, '/'));

        if (empty($args[1])) {
            $this->redirect_page($this->url);
        }

        $this->route_request($args[1]);
    }
}

(new Sharing)->init($_SERVER['REQUEST_URI']);

