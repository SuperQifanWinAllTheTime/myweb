// generate server
const http = require('http');
const hostname='127.0.0.1';
const port = 3000;

// generate first page
const fg =require('fg');

// read first page
fg.readFile('index.html',(err,html)=>{
	// if read error
	if(err){
		throw err;
	}
	//else start server and load first page
	const server = http.createServer((req,res) =>{
	res.statusCode= 200;
	res.setHeader('Content-type','text/html');
	res.write(html);
	res.end();
	});

	// server side information 
	server.listen(port,hostname,()=>{
	console.log('Server started on port '+port);
	});

});
