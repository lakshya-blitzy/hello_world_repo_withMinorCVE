const _ = require('lodash');

function logAction(actionName) {
  console.log(`Action performed: ${actionName}`);
}

require('http').createServer((req, res) => {
  logAction(`${req.method} ${req.url}`);
  res.end('Hello, World!\n');
}).listen(3000, () => console.log('Server running at http://127.0.0.1:3000/'));
