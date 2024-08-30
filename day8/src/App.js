import React, { useState } from "react";


function Counter() {
    const [count, setcount] = useState(0)
    const [step, setstep] = useState(1)


    const date = new Date()
    date.setDate(date.getDate() + count)

    const reset = () => {
        setcount(0);
        setstep(1);
        
    };
    return (
        <div>
            <p>Count: {count}</p>


            <button onClick={() => setcount(count + step)}>➕</button>

            <button onClick={() => setcount(count - step)}>➖</button>

            <p>Step: {step}</p>

            <button onClick={() => setstep(step + 1)}>➕</button>
            <button onClick={() => setstep(step - 1)}>➖</button>

            <p>
                {
                    count === 0 ? "Today " : count > 0 ? `${count} days from today` : `${count} days ago was `
                }
            </p>
            {/* <p>{date.toDateString()}</p> */}

            <button onClick={reset}>Reset</button> {/* Reset button */}





        </div>

    )
}
export default Counter;  //exporting the component