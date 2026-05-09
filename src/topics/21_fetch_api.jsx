// Topic 21: Fetch API
// Learn how to fetch data from an API

import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Topic 21: Fetch API</h1>

      {loading && <p>Loading...</p>}

      {!loading && (
        <ul>
          {users.slice(0, 5).map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}

      <hr />

      <h2>Fetch Steps</h2>
      <p>1. Create state for data and loading</p>
      <p>2. Use useEffect with empty [] to run once</p>
      <p>3. Create async function inside useEffect</p>
      <p>4. Use await fetch(url) to get response</p>
      <p>5. Use await response.json() to parse data</p>
      <p>6. Update state with setUsers and setLoading</p>

    </div>
  )
}

export default App
