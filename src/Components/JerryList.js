import React, { Component } from 'react'
import axios from 'axios'
import randomId from 'random-id';


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
        var body = { 
            quote: props,
         }
        axios.post('/api/quotes/jerry', body).then((res) =>{
            console.log(res)
             this.setState({
                 jerryList: res.data
             })
        })
    }

    deleteJerryQuote(id) {
        axios.delete(`/api/quotes/jerry/${id}`).then((res) => {
            this.setState({
                jerryList: res.data,
            })
        })
    }

    render() {
        let jerrySaid = this.state.jerryList.map((element, index) => {
            return <p key={index + 1}>{element.quote}<button onClick={(e) => this.deleteJerryQuote(element.id)}>Remove</button></p>
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