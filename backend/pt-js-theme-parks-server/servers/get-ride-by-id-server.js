const http = require("http");
const fetchRideById = require("../db/models/fetchRideById").fetchRideById

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const urlChars = url.split('/');
  const id = Number(urlChars[urlChars.length - 1])

  if(method === 'GET' && url === `/api/ride/${id}`) {
    fetchRideById(id).then((ride) => {
      res.setHeader('Content-type', 'application/json');
      res.statusCode = 200;
      res.write(JSON.stringify({ride}))
      res.end()
    })
  }
})

server.listen(9094, () => {
  console.log('listening on 9094')
});