import { fromFileUrl } from 'https://deno.land/std/path/mod.ts';
import { listenAndServe } from 'https://raw.githubusercontent.com/denoland/deno/master/std/http/server.ts';
import { print } from '../console/index.ts';

listenAndServe({ port: 9000 }, async (req) => {
  // Basic hello world.
  // req.respond({
  //   body: 'Hello world!'
  // });

  // Render html file
  const u = new URL('./index.html', import.meta.url);
  const file = await Deno.open(fromFileUrl(u));

  req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/html',
    }),
    body: file,
  });
});

print('Server running: http://localhost:9000/');
