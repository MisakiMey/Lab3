const http = require('http')
let port = 8080
let fs = require ("fs")
let path = "file.txt"
let requestHandler = (request, response) => {
  console.log(request.url)
  fs.writeFile (path, request.url, (err)=> {
    if (err){
        console.log (err.message)
    }
    else {
        console.log ("ok")
    }
})
  response.writeHead(200, {
  'Content-Type': 'text/html; charset=utf-8'
  })
  if(request.url === "/contact"){
    response.write("Error4 404");
  }
  response.write(`Server started at port ${port}!`)
  response.end()
}
  const server = http.createServer(requestHandler)
  server.listen(port, (err) => {
  if(err) {
  return console.log("Error:", err)
  }
  console.log(`Server started at port ${port}`)
  })    