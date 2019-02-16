import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import JerryList from './Components/JerryList';
import ElaineList from './Components/ElaineList';
import GeorgeList from './Components/GeorgeList';
import KramerList from './Components/KramerList';

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
        <div>
          {this.state.seinfeldQuotes}
        </div>
          <button onClick={ () => this.handleGetQuote()}>Get Quote</button>
        <div>
          <JerryList quote={this.state.seinfeldQuotes} />
          <ElaineList quote={this.state.seinfeldQuotes} />
          <GeorgeList quote={this.state.seinfeldQuotes} />
          <KramerList quote={this.state.seinfeldQuotes}></KramerList>
        </div>
      </div>
    );
  }
}

export default App;
