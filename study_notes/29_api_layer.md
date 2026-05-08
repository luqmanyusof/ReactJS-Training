# Topic 29: API Layer

## What is it?
Centralizing all API calls in a dedicated service file instead of scattering fetch calls throughout components.

## Why Use an API Layer?

1. **Single Source of Truth**
   - All endpoints in one file
   - Easy to find API calls
   - Change URL in one place

2. **DRY Principle**
   - Don't repeat fetch logic
   - Reuse same function everywhere
   - Less code duplication

3. **Easier Maintenance**
   - Update API logic once
   - Add headers in one place
   - Handle errors consistently

4. **Cleaner Components**
   - Components focus on UI
   - No fetch code in components
   - Better separation of concerns

5. **Testing**
   - Mock API layer easily
   - Test components without network
   - Isolated API tests

6. **Base URL Management**
   - Configure once
   - Environment-specific URLs
   - Dev vs production

7. **Error Handling**
   - Consistent error format
   - Global error handling
   - Retry logic in one place

## API Layer Pattern
```jsx
// services/api.js
const API_URL = 'https://api.example.com'

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`)
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

export async function createUser(data) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return res.json()
}

export async function updateUser(id, data) {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return res.json()
}

export async function deleteUser(id) {
  await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' })
}
```

## Using in Components
```jsx
// Component.jsx
import { getUsers, createUser } from './services/api'

function UserManager() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(setUsers)  // Clean!
  }, [])

  async function handleAdd(name) {
    const newUser = await createUser({ name })
    setUsers([...users, newUser])
  }
}
```

## Benefits Summary
| Without API Layer | With API Layer |
|-------------------|----------------|
| Fetch in every component | Import function |
| Duplicate error handling | Centralized handling |
| URLs scattered | URLs in one file |
| Hard to update | Easy to maintain |
