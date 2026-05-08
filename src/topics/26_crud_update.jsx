// Topic 26: CRUD Update
// Learn how to edit items (U = Update)

import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ])
  const [editId, setEditId] = useState(null)
  const [editName, setEditName] = useState('')

  function startEdit(user) {
    setEditId(user.id)
    setEditName(user.name)
  }

  function saveEdit() {
    // Update the user with matching id
    const updatedUsers = users.map(user => {
      if (user.id === editId) {
        return { ...user, name: editName }  // Update this user
      }
      return user  // Keep other users unchanged
    })
    setUsers(updatedUsers)
    setEditId(null)  // Exit edit mode
  }

  return (
    <div>
      <h1>Topic 26: CRUD - Update</h1>

      <ul>
        {users.map(user => {
          // Check if this user is being edited
          const isEditing = editId === user.id
          
          return (
            <li key={user.id}>
              {isEditing ? (
                // Edit mode
                <span>
                  <input value={editName} onChange={e => setEditName(e.target.value)} />
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </span>
              ) : (
                // View mode
                <span>
                  {user.name}
                  <button onClick={() => startEdit(user)}>Edit</button>
                </span>
              )}
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default App
