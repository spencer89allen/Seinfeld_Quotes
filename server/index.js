var express = require('express')
var bodyParser = require('body-parser')

var cntrl = require('./controllers')

var app = express()

app.use(bodyParser.json())

// Jerry Endpoints
app.post('/api/quotes/jerry', cntrl.addJerry)
app.get('/api/quotes/jerry', cntrl.getJerry)

//Elain Endpoints
app.post('/api/quotes/elaine', cntrl.addElaine)
app.get('/api/quotes/elaine', cntrl.getElaine)

var port = 4002

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})