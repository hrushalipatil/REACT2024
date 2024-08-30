import React from "react";

// 1.
// const FunctionFour =(props)=>{
    
//     console.log(props.greet)
//     console.log(props.greet1)


//     return(
//       <div>
//         <h1>Function Four</h1>
//         <h1>{props.greet}</h1>
//         <h1>{props.greet1}</h1>
//       </div>
//     )

// }
// 2.
const FunctionFour =({greet,greet1})=>{
    

    return(
      <div>
        <h1>Function Four</h1>
        <h1>{greet}</h1>
        <h1>{greet1}</h1>
      </div>
    )

}


export default FunctionFour;