const http = require('http');
const fs = require('fs/promises');
const path = require('path');//ensures manipulation of paths cross platform functionality
const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {

   try{
    if(req.method === 'GET'){
        let filePath;
        if(req.url === '/'){
            filePath = path.join(__dirname, 'public' , 'index.html');
            
        }else if(req.url === '/about'){
    
            filePath = path.join(__dirname, 'public' , 'about.html');
    
        }else if(req.url === '/contact-me'){
    
            filePath = path.join(__dirname, 'public' , 'contact-me.html');
    
    
    
        }else{
            filePath = path.join(__dirname, 'public' , '404.html');
    
    
    
        }
        const data = await fs.readFile(filePath);//reads file at constructed path
        res.setHeader('Content-Type', 'text/html')
        res.write(data);
        res.end();

    }else{

        throw new Error('Method not allowed');
    }


   }catch(error){

    res.writeHead(500, {'Content-Type': 'text/html'});
    res.end('Server Error');


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
    //console.log(__filename, __dirname);
    //dirmane: is entire path not file name included
    //filename: entire path including file(in this case app.js)

});