import React, { useState } from "react";

import ChildComponent from "./ChildComponent"

// parent method as a prop sending to child component , child component 
// will with args which will received in parent


const ParentComponent =()=>{
    const [message, setmessage] = useState("Parent Component..")
    // childmessage- argunment
    const handleChildAction =(childMessage) =>{
        // setmessage(childMessage='setmessage')
        alert(`Message from ${childMessage}`)

    }

    return(
        <div>
            <h1>Parent Component</h1>
            <ChildComponent onAction={handleChildAction} />
            
        
        </div>
    )
}

export default ParentComponent;