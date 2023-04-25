// Importing 'http' module
const http = require('http');

// Setting Port Number as 80
const port = 4000;

// Setting hostname as the localhost

const hostname = 'localhost';

// Creating Server
const server = http.createServer((req,res)=>{

	// Handling Request and Response
	
	res.end("Prathimasree")
});

// Making the server to listen to required
// hostname and port number
server.listen(port,hostname,()=>{

	// Callback
	console.log('Prathimasree');
	console.log(`Server running at http://${hostname}:${port}/`);
});
