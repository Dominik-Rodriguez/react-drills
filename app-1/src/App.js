import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      input: ''
    }
  }

  updateScreen(value){
    this.setState({input: value})
  }

  render() {
    return(
      <div className="App">
        <input type="text" onChange={(e) => this.updateScreen(e.target.value)}></input>
        <h2>{this.state.input}</h2>
      </div>
    )
  }
}
export default App;
