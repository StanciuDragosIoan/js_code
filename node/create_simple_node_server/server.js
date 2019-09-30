/*
    core modules (shipped with node) + others we can install locally

    e.g. core modules: http/https/fs/path/os

*/

const http = require('http');
const fs = require('fs');

/*
    request listner (function which will run for each request made to the server) 
    defined explicitly

*/
    // function rqListener(req, res){

// }


//anonymous function declared as request listener
const server = http.createServer((req, res)=> {
    console.log(req.url, req.method, req.headers);
    // process.exit(); stops the server

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        //stop server here
        return res.end();
    }

    if(url === '/'  && method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }



    //set headers
    res.setHeader('Content-type', 'text/html');
    //write response
    res.write('<html>');
    res.write('<head><title>my 1st server</title></head>');
    res.write('<body><h1>Hello from node server =)!</h1></body>');
    res.write('</html>');

    res.end();
});

server.listen(3000);
