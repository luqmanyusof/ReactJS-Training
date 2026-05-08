// Topic 29: API Layer
// Learn how to organize API calls in a service file

import { useState, useEffect } from 'react'

// Put API functions in services/api.js
const API_URL = 'https://jsonplaceholder.typicode.com'

async function getUsers() {
  const res = await fetch(API_URL + '/users')
  return res.json()
}

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data.slice(0, 5))
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <h1>Topic 29: API Layer</h1>

      {loading && <p>Loading...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
