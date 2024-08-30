import React ,{useState}from "react";

function FunctionFive ({message}){
    const [msg, setmsg] = useState(message)
    
    let ChangeMessage =()=>{
        setmsg("🌻hellooo sunshine🌻")
    }


    return(
        <div>
          {
            <h2>{msg}</h2>
          }
          <button onClick={ChangeMessage}>Change Message</button>
        </div>
    )
}
export default FunctionFive;