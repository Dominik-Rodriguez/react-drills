import React, {Component} from 'react';
import './App.css';
import NewTask from './Components/NewTask';
import List from './Components/List'
// import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(task) {
    this.setState({list: [...this.state.list, task]})
  }

  render(){
    return(
      <div className="App">
        <h1>My to do list: </h1>
        <NewTask add={this.handleClick} />
        <List tasks={this.state.list} />
      </div>
    )
  }
}

export default App;
