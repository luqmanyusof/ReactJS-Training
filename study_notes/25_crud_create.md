# Topic 25: CRUD - Create

## What is it?
Adding new items to a list/database - the "C" in CRUD.

## Why Learn Create Operation?

1. **Data Entry**
   - Users can add new records
   - Forms capture input
   - Grow your dataset

2. **State Updates**
   - Add to existing array
   - Immutable update pattern
   - Spread operator usage

3. **Unique IDs**
   - Every item needs unique identifier
   - `Date.now()` for simple cases
   - UUID for production

4. **Form Handling**
   - Capture user input
   - Validate before adding
   - Clear form after submit

5. **UI Feedback**
   - Show new item immediately
   - Success message
   - Optimistic updates

6. **Spread Operator Mastery**
   - `[...array, newItem]` pattern
   - Keep existing items
   - Add new at end

7. **Toggle Form Display**
   - Show/hide add form
   - Clean UI when not adding
   - Cancel functionality

## Create Pattern
```jsx
function UserManager() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' }
  ])
  const [name, setName] = useState('')

  function handleAdd() {
    // Create new item with unique ID
    const newUser = {
      id: Date.now(),
      name: name
    }
    
    // Add to array (immutable)
    setUsers([...users, newUser])
    
    // Clear input
    setName('')
  }

  return (
    <div>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Name"
      />
      <button onClick={handleAdd}>Add User</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

## With API
```jsx
async function handleAdd() {
  const newUser = { name: name }
  
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
  })
  
  const created = await res.json()
  setUsers([...users, created])
  setName('')
}
```

## Key Points
- Always generate unique ID
- Use spread to keep existing items
- Clear form after successful add
- Validate input before adding
