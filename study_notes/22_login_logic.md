# Topic 22: Login Logic

## What is it?
Implementing authentication logic: checking credentials, storing tokens, and managing logged-in state.

## Why Implement Login Logic?

1. **Authentication**
   - Verify user identity
   - Check username/password
   - Grant access to protected features

2. **Session Persistence**
   - Stay logged in after page refresh
   - localStorage stores auth token
   - Better user experience

3. **Security Token**
   - Token proves user is authenticated
   - Send with API requests
   - Server validates token

4. **State Management**
   - Track `isLoggedIn` state
   - Show different UI based on auth
   - Control access to features

5. **Logout Functionality**
   - Clear token from storage
   - Reset auth state
   - Redirect to public page

6. **Error Handling**
   - Wrong password messages
   - Account not found errors
   - Clear feedback to user

7. **Persistence Across Sessions**
   - Check localStorage on app load
   - Restore logged-in state
   - Seamless experience

## localStorage Methods
```jsx
// Save data
localStorage.setItem('token', 'abc123')
localStorage.setItem('user', JSON.stringify({ name: 'John' }))

// Get data
const token = localStorage.getItem('token')
const user = JSON.parse(localStorage.getItem('user'))

// Remove data
localStorage.removeItem('token')

// Clear all
localStorage.clear()
```

## Login Flow Pattern
```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check on mount
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setIsLoggedIn(true)
  }, [])

  function login(username, password) {
    // Validate credentials (in real app, call API)
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('token', 'fake-token-123')
      setIsLoggedIn(true)
      return true
    }
    return false
  }

  function logout() {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  return (
    isLoggedIn ? <Dashboard onLogout={logout} /> : <Login onLogin={login} />
  )
}
```

## Real-World Authentication
In production:
- Call backend API with credentials
- Receive JWT token from server
- Store token securely
- Send token in API request headers
- Token expires, need refresh logic
