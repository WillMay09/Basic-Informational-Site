const http = require('http');
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {

    if(req.url === '/'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home</h1>');
    }else if(req.url === '/about'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About</h1>');

    }else if(req.url === '/contact-me'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Contact-me</h1>');


    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Error 404</h1>');


    }
    
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    // res.end('<h1>Hello Word</h1>');
    // console.log(req.url);
    // console.log(req.method);




});

server.listen(PORT, ()=>{

    console.log(`Server running on port ${PORT}`)

});