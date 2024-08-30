import React, { Component } from "react";

class ChildClassComponent extends Component{
    handleClick =()=>{
        this.props.onAction('Child class component...')

    }
    render(){
        return(
            <div>
                <h1>Child Class Component</h1>
                <button onClick={this.handleClick}>CLICKKKK MEE ::</button>
            </div>
        )
    }
}

export default ChildClassComponent;