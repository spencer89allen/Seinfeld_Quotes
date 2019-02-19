import React, { Component } from 'react'
import axios from 'axios'

class JerryList extends Component {

    state = {
        jerryList: [],

    }

    componentWillMount() {
        axios.get('/api/quotes/jerry').then((res) => {
            this.setState({
                jerryList: res.data
            })
        })
    }

    addToJerryList(props) {        
        var body = {quote: props}
        axios.post('/api/quotes/jerry', body).then((res) =>{
             this.setState({
                 jerryList: res.data
             })
        })
    }

    deleteJerryQuote(index) {
        axios.delete(`/api/quotes/jerry/${index}`).then((res) => {
            this.setState({
                jerryList: res.data,
            })
        })
    }

    render() {
        let jerrySaid = this.state.jerryList.map((element, index) => {
            return <p key={index}>{element}<button onClick={(index) => this.deleteJerryQuote(index)}>Remove</button></p>
        })
        return(
            <div>
                <button onClick={(e) => this.addToJerryList(this.props.quote)}>Jerry</button>
                <h3>Jerry Quotes:</h3>
                {jerrySaid}
            </div>
        )
    }
}

export default JerryList