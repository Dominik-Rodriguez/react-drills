import React, {Component} from 'react';
import './App.css';
import Image from './Component/Image'

//this is assignment 5

class App extends Component{
  constructor(){
    super();
  }
  render() {
    return(
      <div>
        <Image url={'https://i.pinimg.com/originals/47/18/8b/47188bda325f99d8d904c31809902c17.jpg'} />
      </div>
    )
  } 
}

export default App;
