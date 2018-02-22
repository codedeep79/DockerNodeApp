const express = require('express')
const http 	  = require('http')
const winston = require('winston')

const HOST 	  = '0.0.0.0'
const PORT    = process.env.PORT || 3000;
const app     = express()

app.use(express.static("static"))
app.get('/', (req, res) => {
	res.send('<h1>Build Docker Image Express Nodejs</h1> <img src="/images/panda.png">')
});

const logger = new(winston.Logger)({
	transports: [
		new(winston.transports.Console),
		new(winston.transports.File)({filename: '../logs/web_log.log'})
	]
})

const server = http.createServer(app)
server.on('error', (error) => {
	//console.log(error);
	if (error != null)
		logger.log('error', error)
})

//app.listen(PORT, HOST)
server.listen(PORT, HOST, () => {
	console.log("Server is starting ...");

	logger.log('info', `Server is started on ${new Date()}`)
})
console.log(`Running at http://${HOST}:${PORT}`)
