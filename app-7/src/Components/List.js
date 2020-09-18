import React, {Component} from 'react'
import Todo from './Todo';
//display the tasks inside of the task array

class List extends Component{
    constructor(){
        super();
    }
    
    render(){
        let list = this.props.tasks.map((el, i) => {
            return <Todo key={i} task={el} />;
        })
        return(
            <div>{list}</div>
            )
    }
}

export default List;