// Topic 24: CRUD List
// Learn how to display data (R = Read)

import { useState } from 'react'

function App() {
  const [users] = useState([
    { id: 1, name: 'John', email: 'john@test.com' },
    { id: 2, name: 'Jane', email: 'jane@test.com' },
    { id: 3, name: 'Bob', email: 'bob@test.com' },
  ])

  return (
    <div>
      <h1>Topic 24: CRUD - List (Read)</h1>

      <p>Total: {users.length} users</p>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
