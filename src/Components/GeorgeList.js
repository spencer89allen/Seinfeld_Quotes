import React, { Component } from 'react';
import axios from 'axios';

class GeorgeList extends Component {
 
    state = {
        georgeList: [],

    }

    componentWillMount() {
        axios.get('/api/quotes/george').then((res) => {
            this.setState({
                georgeList: res.data,
            })
        })
    }

    addToGeorgeList(props) {
        var body = {quote: props}
        axios.post('/api/quotes/george', body).then((res) => {
            this.setState({
                georgeList: res.data,
            })
        })
    }

    deleteGeorgeQuote(id) {
        axios.delete(`/api/quotes/george/${id}`).then((res) => {
            this.setState({
                georgeList: res.data,
            })
        })
    }


    render() {
        var georgeSaid = this.state.georgeList.map((element, id) => {
            return <p key={ id }>{ element }<button onClick={(id) => this.deleteGeorgeQuote(id)}>Remove</button></p>
        })
        return (
            <div>
                <button onClick={(e) => this.addToGeorgeList(this.props.quote)}>George</button>
                <h3>George Quotes:</h3>
                {georgeSaid}
            </div>
        )
    }
}

export default GeorgeList;