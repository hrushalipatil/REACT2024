import React from "react";

const ChildComponent =({onAction}) =>{
    const handleClick =()=>{
        onAction("Child component...");
    }

    return (
        <div>
            <h1>ChildComponent</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default ChildComponent