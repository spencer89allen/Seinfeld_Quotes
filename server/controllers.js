var jerryQuotes = []
var elaineQuotes = []
var georgeQuotes = []
var kramerQuotes = []
var otherQuotes = []

//Require
let randomID = require('random-id');

module.exports = {
    
    addJerry: (req, res) => {

        let ID = randomID(10)

        let newQuote = {
            quote: req.body.quote,
            id: ID
        }

        jerryQuotes.push(newQuote)
        res.send(jerryQuotes)
    },

    getJerry: (req, res) => {

        res.send(jerryQuotes)
    },

    deleteJerry: (req, res) => {

        var { id } = req.params

        jerryQuotes = jerryQuotes.filter((quote) => {
            return quote.id != id;
        })

        res.send(jerryQuotes)
    },

    addElaine: (req, res) => {

        var { quote } = req.body

        elaineQuotes.push(quote)

        res.send(elaineQuotes)
    },

    getElaine: (req, res) => {

        res.send(elaineQuotes)

    },

    deleteElaine: (req, res) => {

        var { id } = req.params

        elaineQuotes.splice(id, 1)

        res.send(elaineQuotes)

    },

    addGeorge: (req, res) => {

        var { quote } = req.body

        georgeQuotes.push(quote)

        res.send(georgeQuotes)

    },

    getGeorge: (req, res) => {

        res.send(georgeQuotes)
    },

    deleteGeorge: (req, res) => {

        var { id } = req.params

        georgeQuotes.splice(id, 1)

        res.send(georgeQuotes)

    },

    addKramer: (req, res) => {

        var { quote } = req.body

        kramerQuotes.push(quote)

        res.send(kramerQuotes)

    },

    getKramer: (req, res) => {

        res.send(kramerQuotes)

    },

    deleteKramer: (req, res) => {

        var { id } = req.params

        kramerQuotes.splice(id, 1)

        res.send(kramerQuotes)

    },

    addOther: (req, res) => {
        
        var { quote } = req.body

        otherQuotes.push(quote)

        res.send(otherQuotes)

    },

    getOther: (req, res) => {

        res.send(otherQuotes)

    },

    deleteOther: (req, res) => {

        var { id } = req.params

        otherQuotes.splice(id, 1)

        res.send(otherQuotes)

    },

}

// once everything is said and done work on "dry" (don't repeat yourself)
// consolidate each add, get, edit, and delete into one module
// look at the picture of the code Sam typed out to do that for the add joke and get joke