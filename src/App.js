import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import JerryList from './Components/JerryList';
import ElaineList from './Components/ElaineList';

class App extends Component {

  constructor() {
    super()

    this.state = {
      seinfeldQuotes: '',
      author: ''
    }

  }

  handleGetQuote = () => {
    axios.get('https://seinfeld-quotes.herokuapp.com/random').then( res => {
      this.setState({
        seinfeldQuotes: res.data.quote,
        author: res.data.author,
      })
    })
  }

  render() {
    return (
      <div className="App">
          {this.state.seinfeldQuotes}
          <button onClick={ () => this.handleGetQuote()}>Get Quote</button>
        <div>
          <JerryList quote={this.state.seinfeldQuotes}/>
          <ElaineList quote={this.state.seinfeldQuotes}/>
        </div>
      </div>
    );
  }
}

export default App;
