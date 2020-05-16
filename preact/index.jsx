/** @jsx h */
import { h } from 'https://cdn.pika.dev/preact@^10.3.0';
import { render } from 'https://cdn.pika.dev/preact-render-to-string@^5.1.4';
import { listenAndServe } from 'https://raw.githubusercontent.com/denoland/deno/master/std/http/server.ts';
import { print } from '../console/index.ts';
import App from './app.jsx';

listenAndServe({ port: 9000 }, async (req) => {
  req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/html',
    }),
		body: render(
			<html>
				<head>
					<title>deno preact ssr</title>
				</head>
				<body>
					<div>hello!</div>
					<App />
				</body>
			</html>
		)
  });
});

print('Server running: http://localhost:9000/');