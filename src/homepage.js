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
    <div className="App">
      <header className="App-header">
        <img src="https://www.iconpacks.net/icons/2/free-location-pin-icon-2965-thumb.png" className="App-logo" alt="logo" />
        <p>
         Search<code> your Location</code> Here.
          
        </p>
        <p><input type="textarea" 
          name="textValue"
          onChange={this.handleChange}
        /></p>
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
