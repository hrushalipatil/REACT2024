import React from "react";

// retrive all data 
const FruitItem = [
    { id: 1, name: "apple🍎" },
    { id: 2, name: "banana🍌" },
    { id: 3, name: "orange🍊" },
    { id: 4, name: "grape🍇" },
    { id: 5, name: "watermelon🍉" },


]

const FunctionSix = () => {
    return (
        <div>
            <h1>🧉Fruit List🧉</h1>
            <ol>
                
                {
                    FruitItem.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ol>
        </div>
    )
}
export default FunctionSix;