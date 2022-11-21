<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Dashboard</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            display: block;

            margin: 0;
            padding: 0;

            font: 400 16px/1.5 -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', sans-serif;

            color: #121215;
            background-color: #fff;
        }

        .title {
            display: block;
            margin: 0 0 2.5rem;
            padding-bottom: 1.5rem;
            font-weight: 300;
            border-bottom: solid 1px #ccc;
        }

        .page {
            display: block;

            width: 100%;
            max-width: 980px;

            margin: 4rem auto;
        }

        .logo svg {
            display: block;

            width: auto;
            height: 2rem;
            max-width: 100%;
            fill: #000;
        }

        .content {
            display: flex;
            align-items: flex-start;
            gap: 2rem;
        }

        .summary {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr 1fr;
            flex: 0 0 16rem;

            padding: 1rem;
            font-size: 1.125rem;

            background: #eee;
            border: solid 1px #aaa;
            border-radius: 0.5rem;
        }

        .summary p {
            margin: 0 0 1rem;
        }

        .summary span {
            text-align: center;
        }

        .list {
            display: grid;
            grid-template-columns: repeat(4, auto);
            gap: 1.25rem;
            flex: 1 1 auto;

            max-height: 30rem;
            padding: 1rem;
            overflow: scroll;
            font-size: 1.125rem;

            background: #eee;
            border: solid 1px #aaa;
            border-radius: 0.5rem;
        }

        .list p {
            display: flex;
            align-items: center;
            margin: 0;
        }

        .list span, .list a {
            display: block;
            margin: 0;
            max-width: 10rem;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .list a {
            color: #08c;
            text-decoration: none;
        }

        .list button {
            display: block;
            cursor: pointer;

            padding: 0;
            margin: 0 auto;

            font: inherit;
            font-size: 0.875rem;

            color: #c00;
            background: transparent;

            border: 0;
        }
    </style>
</head>
<body>
    <div class="page">
        <h1 class="title">Dashboard: Efa World Cup</h1>

        <div class="content">
            <div class="summary">
                <strong>Total users:</strong>
                <span><?php echo count($results); ?></span>

                <strong>EN locale:</strong>
                <span><?php echo $amount['en'] ?></span>

                <strong>ES locale:</strong>
                <span><?php echo $amount['es'] ?></span>
            </div>

            <div class="list">
                <?php foreach ($results as $result) : ?>
                    <p data-id="<?php echo $result['rowid']; ?>">
                        <a href="/share/works/<?php echo $result['key']; ?>.png" target="_blank">
                            <?php echo $result['name']; ?>
                        </a>
                    </p>

                    <p data-id="<?php echo $result['rowid']; ?>">
                        <span><?php echo $result['number']; ?></span>
                    </p>

                    <p data-id="<?php echo $result['rowid']; ?>">
                        <span><?php echo $result['lang']; ?></span>
                    </p>

                    <p data-id="<?php echo $result['rowid']; ?>">
                        <button>Delete</button>
                    </p>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <script>
        document.querySelectorAll('.list button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();

                const data = new FormData();
                data.append('delete', this.parentNode.dataset.id);

                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/share/dashboard/', true);
                xhr.responseType = 'json';

                xhr.onload = function () {
                    var response = xhr.response;

                    if (!response.success)  {
                        return alert(response.data || 'Unexpected error');
                    }

                    document.querySelectorAll('.list p[data-id="' + response.data + '"]').forEach(item => {
                        item.remove();
                    });
                };

                xhr.send(data);
            });
        });
    </script>
</body>
</html>
