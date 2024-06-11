console.log("Node.js app is running!");
const http = require('http');

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Node.js app is running!\n');
});

// 监听指定端口（例如：3000）
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
