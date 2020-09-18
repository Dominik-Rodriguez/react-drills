import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      input: '',
      list: ['Dragon ball Z', 'Vegeta', 'Goku', 'Gohan', 'Ryu', 'Meliodus']
    }
  }

  updateScreen(value){
    this.setState({input: value})
  }

  render(){
    let filteredList = this.state.list.filter((item, i) => {
      return item.includes(this.state.input);
    })
    .map((list, i) => {
      return <h2 jey={i}>{list}</h2>
    })
    return(
      <div className="App">
        <input type="text" onChange={(e) => this.updateScreen(e.target.value)}></input>
        {filteredList}
      </div>
    )
  }
}

export default App;
