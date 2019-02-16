var jerryQuotes = []
var elaineQuotes = []
var georgeQuotes = []
var kramerQuotes = []

module.exports = {
    
    addJerry: (req, res) => {

        var { quote } = req.body

        jerryQuotes.push(quote)

        res.send(jerryQuotes)
    },

    getJerry: (req, res) => {

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

    addGeorge: (req, res) => {

        var { quote } = req.body

        georgeQuotes.push(quote)

        res.send(georgeQuotes)

    },

    getGeorge: (req, res) => {

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

}

// once everything is said and done work on "dry" (don't repeat yourself)
// consolidate each add, get, edit, and delete into one module
// look at the picture of the code Sam typed out to do that for the add joke and get joke