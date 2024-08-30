// jsx with ternary -- when we want two condition
import React,{useState} from "react";

const FunctionTwo=()=>{
    const [isLoggedIn,setLoggedIn ] = useState(false)

    // jsx

    return(
        <div>
          <h1>Welcome to Minskole</h1>
          {
            isLoggedIn ? <h2>Hi, you are logged in...</h2> 
            :
             <h>You are logged Out...</h>
          }

          <button onClick={()=>setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log Out": "Log In"}</button>
          
        </div>
    )
}


export default FunctionTwo;
