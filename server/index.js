var express = require('express')
var bodyParser = require('body-parser')

var cntrl = require('./controllers')

var app = express()

app.use(bodyParser.json())

// Jerry Endpoints
app.post('/api/quotes/jerry', cntrl.addJerry)
app.get('/api/quotes/jerry', cntrl.getJerry)
app.delete(`/api/quotes/jerry/:id`, cntrl.deleteJerry)

//Elain Endpoints
app.post('/api/quotes/elaine', cntrl.addElaine)
app.get('/api/quotes/elaine', cntrl.getElaine)
app.delete('/api/quotes/elaine/:id', cntrl.deleteElaine)

//George Endpoints
app.post('/api/quotes/george', cntrl.addGeorge)
app.get('/api/quotes/george', cntrl.getGeorge)
app.delete('/api/quotes/george/:id', cntrl.deleteGeorge)

//Kramer Endpoints
app.post('/api/quotes/kramer', cntrl.addKramer)
app.get('/api/quotes/kramer', cntrl.getKramer)
app.delete('/api/quotes/kramer/:id', cntrl.deleteKramer)

//Someone Else Said it Endpoints
app.post('/api/qoutes/other', cntrl.addOther)
app.get('/api/quotes/other', cntrl.getOther)
app.get('/api/qoutes/other/:id', cntrl.deleteOther)


var port = 4002

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})