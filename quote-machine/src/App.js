import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        messages: [
          {
          message: 'lorem',
          author: 'Haivex'
        },
        {
          message: 'ipsum',
          author: 'Emil'
        },
        {
          message: 'dor',
          author: 'Agniesia'
        },
      ],
      currentMessage: {
        message: '',
        author: ''
      }
    }
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote() {
    const randomNumber = Math.floor(Math.random() * ((this.state.messages.length - 1) - 0 + 1)) + 0;
    this.setState({
      currentMessage: {
        message: this.state.messages[randomNumber].message,
        author: this.state.messages[randomNumber].author,
      }
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="messages">
          <span id="text">{this.state.currentMessage.message}</span>
          <span id="author">{this.state.currentMessage.author}</span>
        </div>
        <div id="buttons">
          <button id="new-quote" onClick={this.getNewQuote}>New quote</button>
          <a target="_blank" href="https://twitter.com/intent/tweet" id="tweet-quote">{<FontAwesomeIcon icon={faTwitterSquare} />}</a>
        </div>
      </div>
    );
  }
}

export default App;
