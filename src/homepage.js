import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render(){return (
    <div className="background">
      <div class="left"><div class="sidemenu"><image src="https://cdn.discordapp.com/emojis/970780591169630278.png?size=32"></image></div><div class="imaga"><a href="https://play.google.com/store"><image src="https://cdn.discordapp.com/emojis/824189692496969740.png?size=32"></image></a></div><div class="imagai"><a href="https://www.instagram.com/priyanshu.__0007/"><image src="https://cdn.discordapp.com/emojis/797052330054516747.gif?size=32"></image></a></div><div class="imagag"><a href="mailto:tpriyanshu775@gmail.com"><image src="https://cdn.discordapp.com/emojis/775178764715950100.gif?size=64"></image></a></div></div>
    <div className="App">
      <header className="App-header">
        <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" className="App-logo" alt="logo" />
        <p>
         Search<code> your Location</code> Here.
          
        </p>
        <p><input type="textarea" 
          name="textValue"
          onChange={this.handleChange}
        /><button class="button button1" value="Go" onClick={() => window.open('/'+this.state.textAreaValue)}>GO</button></p>
        <a
          className="App-link"
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
About Dev.        </a>
      </header>
    </div>
    </div>
  );
}
}

export default App;
