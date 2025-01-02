const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hello World')
}).listen(0, () => {
  console.log(`Server listening on port ${server.address().port}`)
})
