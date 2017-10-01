const server = require('http').Server

const s = server((req,res) => {
	console.log(req.method)
	console.log(req.headers)
	console.log(req.url)
	res.end('OK')
})

s.listen(8080)