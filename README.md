# EFA World Cup 2022
EFA World Cup project by Tiger Soda

## Requirements
Installed nginx, SQLite, php-fpm for production and nodejs with yarn to build.  
Tested with **NodeJS 16** and **PHP8.1**

## Installation
1. Clone this git repo with `git clone`
2. Add required php modules with `composer update`
3. Add required js modules with `yarn`
4. Set config to `.env` file using `.env.example`
5. Use `yarn start` to launch debug server and `yarn build` to prepare for producation
6. Make writable directories `stories/`, `posters/`, `works/`, `database/` inside `/share/`.

## Configure nginx
```nginx
server {
    listen 443 ssl http2;
    server_name efa.earth;

    charset utf-8;
    root /srv/hosts/efa/build;

    ssl_certificate /etc/letsencrypt/live/efa.earth/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/efa.earth/privkey.pem;

    index index.html;

    location / {
       try_files $uri $uri/ /index.html;
    }

    location /share/ {
        alias /srv/hosts/efa/share/;
        include fastcgi_params;

        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME /srv/hosts/efa/share/index.php;

        location /share/posters/ {
            try_files $uri $uri/ =404;
        }

        location /share/stories/ {
            try_files $uri $uri/ =404;
        }

        location /share/works/ {
            try_files $uri $uri/ =404;
        }
    }

    location /share/dashboard/ {
        alias /srv/hosts/efa/share/;
        include fastcgi_params;

        auth_basic "Authentication required";
        auth_basic_user_file passwords/efa.conf;

        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME /srv/hosts/efa/share/index.php;
    }
}
```