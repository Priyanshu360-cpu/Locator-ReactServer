import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: "",
      coder: "",
      stopper:0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlenamer=this.handlenamer.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }
  handlenamer(handler){
    
    if(this.state.stopper==0){
    let a=[...handler.texter]
    let c=""
    for(let i=0;i<a.length;i++){
      let b=this.state.coder+a[i];
    setTimeout(()=>{
      c=c+b;
      this.setState({coder:c
    }) 
  },(i+1)*1000);
}

   this.setState({stopper:1})
    }
  }
  render(){return (
    <div className="background">
    <div className="App">
    <div class="left"><div class="sidemenu"><image src="https://cdn.discordapp.com/emojis/970780591169630278.png?size=32"></image> <div class="hide">hi</div></div><div class="imaga"><a href="https://play.google.com/store"><image src="https://cdn.discordapp.com/emojis/824189692496969740.png?size=32"></image></a></div><div class="imagai"><a href="https://www.instagram.com/priyanshu.__0007/"><image src="https://cdn.discordapp.com/emojis/797052330054516747.gif?size=32"></image></a></div><div class="imagag"><a href="mailto:tpriyanshu775@gmail.com"><image src="https://cdn.discordapp.com/emojis/775178764715950100.gif?size=64"></image></a></div></div>
   
      <header className="App-header">
        <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" className="App-logo" alt="logo" />
        <p>
         Search<code>{this.state.coder}<this.handlenamer texter=" YOUR LOCATION" /></code> Here.
        </p>
        <p><input type="textarea" 
          name="textValue"
          onChange={this.handleChange}
        /><button class="button button1" value="Go" onClick={() => {
          let a=this.state.textAreaValue.split("/")[0].toLowerCase().includes("localhost")?this.state.textAreaValue.split("/")[1]:1;
          if(a!=1&&this.state.textAreaValue.includes('/'))window.open('/mapview?id='+(a))
          else alert("WRONG LINK")
          }}>GO</button></p>
        <a
          className="App-link"
          href="https://github.com/Priyanshu360-cpu"
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
