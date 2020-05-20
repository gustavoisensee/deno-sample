import { listenAndServe, mime } from './deps.ts';
import { respondHtml, respondOtherFiles } from './src/helper/responses.ts';
import { print } from '../console/index.ts';

listenAndServe({ port: 9000 }, async(req) => {
	const contentType = mime.lookup(req.url);

	// If there's no content type it is possibly a html.
	if (!contentType) {
		return respondHtml(req);
	}

	// // Respond all the other type of files.
	return respondOtherFiles(req, contentType);
});

print('Server running: http://localhost:9000/');