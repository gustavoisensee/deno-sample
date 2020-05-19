run-preact:
	deno run --allow-read --allow-net preact/index.jsx

run-react:
	deno bundle react/client.jsx react/build/bundle.js
	deno run --allow-read --allow-net --unstable react/server.jsx

run-server:
	deno run --allow-read --allow-net server/index.js
