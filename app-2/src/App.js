import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      list: ['Dragon ball Z', 'Vegeta', 'Goku', 'Gohan']
    }
  }

  render(){
    let listDisplay = this.state.list.map((list, i) => {
      return (
        <h2 key={i}>{list}</h2>
      )
    })
    return <div className="App">{listDisplay}</div>
  }
  
}

export default App;