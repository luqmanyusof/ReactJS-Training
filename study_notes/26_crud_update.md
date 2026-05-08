# Topic 26: CRUD - Update

## What is it?
Editing existing items in a list - the "U" in CRUD.

## Why Learn Update Operation?

1. **Data Modification**
   - Fix mistakes
   - Change information
   - Keep data current

2. **Edit Mode Toggle**
   - Switch between view and edit
   - Track which item is being edited
   - Cancel without saving

3. **map() for Updates**
   - Find and update one item
   - Keep all other items unchanged
   - Immutable update pattern

4. **Form Pre-population**
   - Load current values into form
   - User sees what they're editing
   - Start from existing data

5. **ID Tracking**
   - Know which item to update
   - `editingId` state pattern
   - Match on update

6. **Save and Cancel**
   - Commit or discard changes
   - Clear edit state
   - Return to view mode

7. **User Experience**
   - Inline editing or modal
   - Clear visual feedback
   - Easy to use

## Update Pattern
```jsx
function UserManager() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ])
  const [editId, setEditId] = useState(null)
  const [editName, setEditName] = useState('')

  function startEdit(user) {
    setEditId(user.id)
    setEditName(user.name)
  }

  function saveEdit() {
    setUsers(users.map(user =>
      user.id === editId
        ? { ...user, name: editName }  // Update this one
        : user                          // Keep others
    ))
    setEditId(null)
  }

  function cancelEdit() {
    setEditId(null)
    setEditName('')
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {editId === user.id ? (
            <>
              <input 
                value={editName} 
                onChange={e => setEditName(e.target.value)} 
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              {user.name}
              <button onClick={() => startEdit(user)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
```

## map() Update Explained
```jsx
// For each user in array:
// - If ID matches editId → return updated user
// - Otherwise → return unchanged user
users.map(user =>
  user.id === editId
    ? { ...user, name: newName }
    : user
)
```
