const http = require("http");
const fetchParks = require("../db/models/fetchParks").fetchParks;

const server = http.createServer( (req, res) => {
  const { method, url } = req;

  if(method === 'GET' && url === '/api/parks') {
    console.log('request 2')
    fetchParks().then((parks) => {
      res.setHeader('Content-type', 'application/json');
      res.statusCode = 200;
      res.write(JSON.stringify({parks}))
      res.end()
    })
  }
})

server.listen(9092, () => {
  console.log('listening on 9092');
})
//console.log(fetchParks())