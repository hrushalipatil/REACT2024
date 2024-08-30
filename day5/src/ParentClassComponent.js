import React, { Component } from "react";

import ChildClassComponent from  "./ChildClassComponent";

class ParentClassComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Parent Component..."
        }
    }


    handleChildAction =(childMessage)=>{
        alert(`Message from ${childMessage}`)

    }
    render(){
        return(
            <div>
                <h1>Parent Class Component</h1>
                <ChildClassComponent onAction={this.handleChildAction} />
            </div>
        )
    }

}

export default ParentClassComponent;