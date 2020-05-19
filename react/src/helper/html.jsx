import { React, ReactDOMServer } from '../../deps.ts';
import App from '../app.jsx';

const html = ReactDOMServer.renderToString(
	<html>
		<head>
			<link rel="icon" href="data:;base64,iVBORw0KGgo=" />
			<title>deno react ssr</title>
		</head>
		<body>
			<div>hello!</div>
			<div id='root'>
				<App />
			</div>
			<script type="module" src="build/bundle.js"></script>
		</body>
	</html>
);

export default html;
