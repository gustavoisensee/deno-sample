import { readFileStr } from '../../deps.ts';
import html from './html.jsx';

export const respondHtml = (req: any) => req.respond({
	status: 200,
	headers: new Headers({
		'content-type': 'text/html',
	}),
	body: html
});

export const respondOtherFiles = async(req: any, contentType: string) => {
	const result = await readFileStr(
		`${Deno.cwd()}/react/${req.url}`,
		{ encoding: 'utf8' }
	);

	return req.respond({
		status: 200,
		headers: new Headers({
			'content-type': contentType,
		}),
		body: result,
	});
};