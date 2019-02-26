const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer('user',(req,res)=>{
    // res.statusCode

    // res.setHeader('Content-Type','text/plain');
   
    var userName;
    function getData(name,callback){
        userName = name;
        callback();
    };
    function report(){
        console.log("user records"+userName);
    }
    getData("Lax",report);
   
    res.end('Hello world')

});


server.listen(port, hostname, function(){
    console.log("Check to start the server")
});