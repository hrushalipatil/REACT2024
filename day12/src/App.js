import React, { useState, useEffect } from 'react';

// useEffect is used to handle side effects (like data fetching), and it runs based on the dependencies you provide.

// Purpose: useEffect is used to perform side effects like data fetching after the component mounts (i.e., when the component is rendered for the first time).
// Dependency Array ([]): The empty array at the end means this effect will run only once after the first render (when the component mounts).

function App() {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network request fail...")
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data)
        setLoading(false)
      })
      .catch((errr) => {
        setError(errr)
        setLoading(false)
      })
  }, []);
  if (loading) {
    return <p>loading</p>
  }
  if (error) {
    return <p>Error:{error.message}</p>
  }
  return (
    <h1>
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>{user.first_name}{user.last_name}</p>
              <p>Email:{user.email}</p>
            </li>
          ))
        }
      </ul>
    </h1>
  
  )

}

export default App;

 