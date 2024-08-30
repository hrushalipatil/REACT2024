import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []) ;

  return <div>
         <p>🐔Hello React🐔 </p>
         <p> It's {time}</p>
         </div>
}

export default App;