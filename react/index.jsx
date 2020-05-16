import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { listenAndServe } from 'https://raw.githubusercontent.com/denoland/deno/master/std/http/server.ts';
import { print } from '../console/index.ts';
import App from './app.jsx';

listenAndServe({ port: 9000 }, async (req) => {
  req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/html',
    }),
		body: ReactDOMServer.renderToString(
			<html>
				<head>
					<title>deno react ssr</title>
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