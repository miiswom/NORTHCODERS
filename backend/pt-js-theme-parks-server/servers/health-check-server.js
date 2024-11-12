const http = require("http");

const server = http.createServer((req, res) => {
  const {method, url} = req;

  if(method === 'GET' && url === '/api/healthcheck') {
  console.log('request 2');
  res.setHeader('Content-type', 'application/json');
  res.statusCode = 200;
  res.write(JSON.stringify({msg: 'seerver alive and kicking it again'}))
  res.end()
  }
});

server.listen(9090, () => {
  console.log('listening on 9090');
})
