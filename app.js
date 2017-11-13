//experiment n 1
var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World\nvery cool');
}).listen(8000);