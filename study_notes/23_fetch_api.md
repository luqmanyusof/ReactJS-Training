# Topic 23: Fetch API

## What is it?
Using JavaScript's `fetch()` function with useEffect to get data from APIs.

## Why Use Fetch in React?

1. **Real-World Data**
   - Get data from servers/APIs
   - Not just hardcoded values
   - Dynamic, up-to-date content

2. **Standard Web API**
   - Built into browsers
   - No library needed
   - Promise-based, modern syntax

3. **Async/Await Support**
   - Clean, readable code
   - Easy error handling
   - Sequential operations

4. **Full HTTP Support**
   - GET, POST, PUT, DELETE
   - Custom headers
   - Send JSON data

5. **useEffect Integration**
   - Fetch on component mount
   - Re-fetch when dependencies change
   - Proper React pattern

6. **State Updates**
   - Store fetched data in state
   - UI updates automatically
   - Loading and error states

7. **JSON Parsing**
   - `response.json()` to parse
   - Works with REST APIs
   - Standard data format

## Pattern
```jsx
import { useState, useEffect } from 'react'

function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://api.example.com/users')
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    }
    
    fetchUsers()
  }, [])

  if (loading) return <p>Loading...</p>
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}
```

## Important Notes
- Define async function INSIDE useEffect
- Cannot make useEffect callback async directly
- Handle loading and error states
- Empty dependency array for fetch-once

## HTTP Methods
```jsx
// GET (default)
fetch('/api/users')

// POST
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
})

// DELETE
fetch('/api/users/1', { method: 'DELETE' })
```
