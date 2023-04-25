// Importing 'http' module
const http = require('http');

// Setting Port Number as 80
const port = 4000;

// Setting hostname as the localhost

const hostname = 'localhost';

// Creating Server
const server = http.createServer((req,res)=>{

	// Handling Request and Response
	console.log(req.url,req.headers,req.method);
	//res.end("Prathimasree")
	//process.exit();
	if(req.url == '/home'){
		res.setHeader('Content-Type','text/html');
	    res.write('<html>');
	    res.write('<head><title></title></head>');
	    res.write('<body><h1>Welcome to home Page</h1></body>');
	    res.end();

	}else if(req.url == '/about'){
		res.setHeader('Content-Type','text/html');
	    res.write('<html>');
	    res.write('<head><title></title></head>');
	    res.write('<body><h1>Welcome to about page</h1></body>');
	    res.end();

	 }else if(req.url == '/node'){
		res.setHeader('Content-Type','text/html');
	    res.write('<html>');
	    res.write('<head><title></title></head>');
	    res.write('<body><h1>Welcome to node js page!</h1></body>');
	    res.end();

	 }else{
		res.setHeader('Content-Type','text/html');
	    res.write('<html>');
	    res.write('<head><title></title></head>');
	    res.write('<body><h1>Hello frrom my Node.js Server!</h1></body>');
	    res.end();
	 }

	
});

// Making the server to listen to required
// hostname and port number
server.listen(port,hostname,()=>{

	// Callback
	console.log('Prathimasree');
	console.log(`Server running at http://${hostname}:${port}/`);
});
