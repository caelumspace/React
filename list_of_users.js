import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(`There was an error retrieving the user list: ${error}`));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => <li key={user._id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default UserList;
