# Topic 24: CRUD - List (Read)

## What is CRUD?
Create, Read, Update, Delete - the four basic operations for managing data.

## Why Start with List/Read?

1. **Foundation of Data Display**
   - Display all records
   - First thing users see
   - Base for other operations

2. **Data Verification**
   - Confirm data exists
   - Verify structure is correct
   - Debug before other operations

3. **User Interface Design**
   - Plan layout for data
   - Table or card format
   - Pagination considerations

4. **State Structure**
   - Define how data is stored
   - Array of objects pattern
   - Prepare for mutations

5. **Loading States**
   - Show while fetching
   - Empty state when no data
   - Professional UX

6. **Mapping Practice**
   - `map()` for rendering lists
   - Key props for items
   - Core React skill

7. **Action Buttons Setup**
   - Edit and Delete buttons per row
   - Prepare for future functionality
   - Complete UI structure

## List Pattern
```jsx
function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John', email: 'john@test.com' },
    { id: 2, name: 'Jane', email: 'jane@test.com' },
  ])

  return (
    <div>
      <h1>Users ({users.length})</h1>
      
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
```

## With API Fetch
```jsx
useEffect(() => {
  async function fetchUsers() {
    const res = await fetch('/api/users')
    const data = await res.json()
    setUsers(data)
  }
  fetchUsers()
}, [])
```

## Key Points
- Always use unique `key` prop
- Handle empty state
- Show loading indicator
- Structure data consistently
