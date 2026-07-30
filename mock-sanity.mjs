import { createServer } from 'http';
createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.write('data: {"type": "welcome"}\n\n');
}).listen(3001, () => {
  console.log('Mock Sanity listening on 3001');
});
