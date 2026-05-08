# Topic 27: CRUD - Delete

## What is it?
Removing items from a list - the "D" in CRUD.

## Why Learn Delete Operation?

1. **Data Cleanup**
   - Remove outdated records
   - Delete user accounts
   - Clean up mistakes

2. **filter() Method**
   - Keep items that pass test
   - Remove items that don't
   - Returns new array

3. **Confirmation**
   - Prevent accidental deletes
   - `window.confirm()` for simple cases
   - Modal for better UX

4. **Undo Functionality**
   - Save deleted item temporarily
   - Allow recovery
   - Better user experience

5. **Immediate UI Update**
   - Remove from list instantly
   - Optimistic update
   - Responsive feel

6. **Cascade Effects**
   - Consider related data
   - What depends on this item?
   - Clean up references

7. **Empty State**
   - Handle when list becomes empty
   - Show appropriate message
   - Guide user to add items

## Delete Pattern
```jsx
function UserManager() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ])

  function handleDelete(id) {
    // Confirm before delete
    if (window.confirm('Delete this user?')) {
      // Keep all users EXCEPT the one with this id
      setUsers(users.filter(user => user.id !== id))
    }
  }

  return (
    <div>
      {users.length === 0 ? (
        <p>No users. Add some!</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
```

## filter() Explained
```jsx
// filter() keeps items where callback returns true

users.filter(user => user.id !== deleteId)
// Translation: Keep user if user.id is NOT equal to deleteId
// Result: All users except the one we're deleting
```

## With Undo
```jsx
const [deleted, setDeleted] = useState(null)

function handleDelete(id) {
  const userToDelete = users.find(u => u.id === id)
  setDeleted(userToDelete)
  setUsers(users.filter(u => u.id !== id))
}

function handleUndo() {
  if (deleted) {
    setUsers([...users, deleted])
    setDeleted(null)
  }
}
```
