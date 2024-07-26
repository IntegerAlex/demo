import http from 'http';

const server = http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World');
})

server.get('/',(req,res)=>{
	res.send('Hello World');	
});

server.listen(3000,()=>{
	console.log('Server is running on port 3000');	
});
