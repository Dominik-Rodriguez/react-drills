import React, {Component} from 'react'

class Image extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <img src={this.props.url} alt="mastered ultra instict Goku"/>
            </div>
        )
    }
}

export default Image;