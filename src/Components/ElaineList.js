import React, { Component } from 'react';
import axios from 'axios';


class ElaineList extends Component {

    state = {
        elaineList: [],
    }

    componentWillMount(){
        axios.get('/api/quotes/elaine').then((res) => {
            this.setState({
                elaineList: res.data
            })
        })
    }

    addToElaineList(props) {
        var body = {quote: props}
        axios.post('/api/quotes/elaine', body).then( (res) =>{
            this.setState({
                elaineList: res.data
            })
        })
    }

    deleteElaineQuote(id) {
        axios.delete(`/api/quotes/elaine/${id}`).then((res) =>{
            this.setState({
                elaineList: res.data,
            })
        })
    }

    render() {

        var elaineSaid = this.state.elaineList.map((element, id) => {
            return <p key={id}>{element}<button onClick={(id) => this.deleteElaineQuote(id)}>Remove</button></p>
        })

        return (
            <div>
                <button onClick={(e) => this.addToElaineList(this.props.quote)}>Elaine</button>
                <h3>Elaine Quotes:</h3>
                {elaineSaid}
            </div>
        )
    }
}

export default ElaineList;