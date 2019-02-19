import React, { Component } from 'react'
import Axios from 'axios'

class OtherList extends Component {

    state = {
        otherList: [],

    }

    componentWillMount() {
        Axios.get('/api/quotes/other').then((res) => {
            this.setState({
                otherList: res.data
            })
        })
    }

    addToOtherList(props) {
        var body = {quote: props}
        Axios.post('/api/qoutes/other', body).then((res) => {
            this.setState({
                otherList: res.data,
            })
        })
    }

    deleteOtherQuote(id) {
        Axios.delete(`/api/quote/other/${id}`).then((res) => {
            this.setState({
                otherList: res.data,
            })
        })
    }


    render() {
        var otherSaid = this.state.otherList.map((element, id) => {
            return <p key={id}>{element}<button onClick={(id) => this.deleteOtherQuote(id)}>Remove</button></p>
        })
        return (
            <div>
                <button onClick={() => this.addToOtherList(this.props.quote)}>Other</button>
                <h3>Someone Else Said it:</h3>
                {otherSaid}
            </div>
        )
    }
}

export default OtherList