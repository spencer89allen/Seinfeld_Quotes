import React, { Component } from 'react';
import Axios from 'axios';


class KramerList extends Component {

    state = {
        kramerList: [],

    }

    componentWillMount() {
        Axios.get('/api/quotes/kramer').then(( res ) => {
            this.setState({
                kramerList: res.data
            })
        })
    }

    addToKramerList( props ) {
        var body = { quote: props }
        Axios.post('/api/quotes/kramer', body).then((res) => {
            this.setState({
                kramerList: res.data
            })
        }) 
    }

    deleteKramerQuote(id) {
        Axios.delete(`/api/quotes/kramer/${id}`).then((res) => {
            this.setState({
                kramerList: res.data
            })
        })
    }

    render() {
        var kramerSaid = this.state.kramerList.map(( element, id ) => {
            return <p key={ id }>{ element }<button onClick={(id) => this.deleteKramerQuote(id)}>Remove</button></p>
        })
        return (
            <div>
                <button onClick={(e) => this.addToKramerList(this.props.quote)}>Kramer</button>
                <h3>Kramer Quotes:</h3>
                { kramerSaid }
            </div>
        )
    }
}

export default KramerList;