var jerryQuotes = []
var elaineQuotes = []

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

}

// once everything is said and done work on "dry" (don't repeat yourself)
// consolidate each add, get, edit, delete into one module
// look at the picture of the code Sam typed out to do that for the add joke and get joke