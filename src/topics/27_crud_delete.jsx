// Topic 27: CRUD Delete
// Learn how to delete items (D = Delete)

import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ])

  function handleDelete(id) {
    if (window.confirm('Delete this user?')) {
      setUsers(users.filter(user => user.id !== id))
    }
  }

  return (
    <div>
      <h1>Topic 27: CRUD - Delete</h1>

      <p>Users: {users.length}</p>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {users.length === 0 && <p>No users left!</p>}

    </div>
  )
}

export default App
