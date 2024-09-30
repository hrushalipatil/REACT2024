import React, { useState } from 'react';
// POST -------
// function CreateUser() {
//   const [name, setName] = useState('');
//   const [job, setJob] = useState('');
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const payload = { name, job };

//     fetch('https://reqres.in/api/users', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setResponse(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <h1>Create User</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter name"
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Job:
//             <input
//               type="text"
//               value={job}
//               onChange={(e) => setJob(e.target.value)}
//               placeholder="Enter job"
//             />
//           </label>
//         </div>
//         <button type="submit">Create User</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {response && (
//         <div>
//           <h3>User Created</h3>
//           <p>ID: {response.id}</p>
//           <p>Name: {response.name}</p>
//           <p>Job: {response.job}</p>
//           <p>Created At: {response.createdAt}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// PUT--------------------
// function UpdateUser() {
//   const [name, setName] = useState('');
//   const [job, setJob] = useState('');
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const payload = { name, job };

//     fetch('https://reqres.in/api/users/2', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network request failed');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setResponse(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <h1>Update User</h1>
//       <form onSubmit={handleUpdate}>
//         <div>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter new name"
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Job:
//             <input
//               type="text"
//               value={job}
//               onChange={(e) => setJob(e.target.value)}
//               placeholder="Enter new job"
//             />
//           </label>
//         </div>
//         <button type="submit">Update User</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {response && (
//         <div>
//           <h3>User Updated</h3>
//           <p>Name: {response.name}</p>
//           <p>Job: {response.job}</p>
//           <p>Updated At: {response.updatedAt}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// DELETE ---------------- 


function DeleteUser() {
  const [userId, setUserId] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch(`https://reqres.in/api/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        setResponse('User deleted successfully');
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handleDelete}>
        <div>
          <label>
            User ID:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter user ID to delete"
              required
            />
          </label>
        </div>
        <button type="submit">Delete User</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <p>{response}</p>}
    </div>
  );
}

export default DeleteUser;


// export default UpdateUser;


// export default CreateUser;
