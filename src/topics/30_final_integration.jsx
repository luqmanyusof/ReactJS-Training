// Topic 30: Final Integration
// Course complete! Summary of what you learned

import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 3)))
  }, [])

  function handleAdd() {
    setUsers([...users, { id: Date.now(), name: name }])
    setName('')
  }

  function handleDelete(id) {
    setUsers(users.filter(u => u.id !== id))
  }

  return (
    <div>
      <h1>Topic 30: Course Complete!</h1>

      <h2>Mini CRUD Demo</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>X</button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>What You Learned</h2>
      <p><strong>Basics:</strong> JSX, Components, Props</p>
      <p><strong>State:</strong> useState, Forms, Inputs</p>
      <p><strong>Effects:</strong> useEffect, Fetch API</p>
      <p><strong>CRUD:</strong> Create, Read, Update, Delete</p>
      <p><strong>Auth:</strong> Login, localStorage, Protected Routes</p>
      <p><strong>Structure:</strong> Components, API Layer</p>

      <h2>Next Steps</h2>
      <p>1. Build your own project</p>
      <p>2. Learn React Router for real routing</p>
      <p>3. Explore state management (Context, Redux)</p>
      <p>4. Try a UI library (Tailwind, Material-UI)</p>
    </div>
  )
}

export default App
