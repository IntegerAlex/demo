const express = require('express');
const app = express();


app.get('/', (req, res) => {
	console.log(req.header);
	res.send('Hello Serverless');
	
})

app.listen(8080, () => {
	console.log('Server is running on port 3000');
}
)
