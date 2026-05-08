# Topic 23: Protected Route

## What is it?
Restricting access to certain pages/routes based on authentication status.

## Why Use Protected Routes?

1. **Access Control**
   - Only authenticated users see protected content
   - Redirect unauthorized users to login
   - Security at route level

2. **User Experience**
   - Don't show features user can't use
   - Clear navigation flow
   - Automatic redirects

3. **Security Layer**
   - Frontend access control
   - Combined with backend auth
   - Defense in depth

4. **Role-Based Access**
   - Admin-only pages
   - Premium user features
   - Different access levels

5. **Redirect Flow**
   - Unauthenticated → Login page
   - After login → Original destination
   - Smooth user journey

6. **Reusable Pattern**
   - One ProtectedRoute component
   - Wrap any protected page
   - Consistent behavior

7. **State Preservation**
   - Remember where user wanted to go
   - Redirect after login
   - No lost context

## Protected Route Pattern
```jsx
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token')
  
  if (!token) {
    return <Navigate to="/login" />
  }
  
  return children
}

// Usage with React Router
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

## Simple Implementation (Without Router)
```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [page, setPage] = useState('home')

  function goToProtectedPage() {
    if (isLoggedIn) {
      setPage('dashboard')
    } else {
      alert('Please login first')
      setPage('login')
    }
  }

  return (
    <div>
      {page === 'dashboard' && isLoggedIn && <Dashboard />}
      {page === 'dashboard' && !isLoggedIn && <Login />}
    </div>
  )
}
```

## Best Practices
- Check auth on every protected route
- Store original destination for redirect
- Show loading while checking auth
- Combine with backend authorization
- Never trust frontend auth alone
