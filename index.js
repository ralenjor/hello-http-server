const http = require('http');

const port = 8080;


const server = http.createServer((req, res) => {

    console.log(`${req.method} received for path: ${req.url}`);

    res.writeHead(200, { 
        'content-type': 'text/html',

     });


    res.end('Hello World');});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

});