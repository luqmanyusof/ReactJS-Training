// Topic 25: CRUD Create
// Learn how to add new items (C = Create)

import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ])
  const [name, setName] = useState('')

  function handleAdd() {
    const newUser = { id: Date.now(), name: name }
    setUsers([...users, newUser])
    setName('')
  }

  return (
    <div>
      <h1>Topic 25: CRUD - Create</h1>

      <h2>Add User</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <button onClick={handleAdd}>Add</button>

      <h2>Users ({users.length})</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
