import { serve } from 'https://raw.githubusercontent.com/denoland/deno/master/std/http/server.ts';
import { print } from '../console/index.ts';

print('http://localhost:9000/');

const s = serve({ port: 9000 });

for await (const req of s) {
  req.respond({
    body: 'Hello world!'
  });
}