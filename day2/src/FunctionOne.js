import React ,{useState} from "react";


// shortCircuit   ------ single output 
// 1. && (and)   --- false (shortCircuit)
// 2. || (or)
// 3. ! (not)
// 4. ?? (nullish coalescing)
// 5. ??= (nullish coalescing assignment)


const FunctionOne =()=>{
    // state
    const [isLoggedIn, setisLoggedIn] = useState(false)
    return(
        <div>
            <h1>Welcome to Minskole</h1>
            {
                isLoggedIn && <p>You are logged In !</p>
            }

            {/* button k click pr  true hai to shortCircuit vale condition me jaigaa jo ki true h toh second condition pr jaiga and click karne pr show karenga 'you are logged in' */}
            <button onClick={()=>setisLoggedIn(true)}>Login</button>
        </div>
    
    )

}
export default FunctionOne