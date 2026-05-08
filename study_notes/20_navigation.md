# Topic 20: Navigation

## What is it?
Different ways to navigate between pages: declarative (Link) and programmatic (useNavigate).

## Why Learn Both Navigation Methods?

1. **Link Component (Declarative)**
   - User clicks to navigate
   - Simple, like anchor tags
   - Accessibility built-in
   - Most common navigation

2. **useNavigate Hook (Programmatic)**
   - Navigate from code
   - After form submission
   - After authentication
   - Conditional redirects

3. **User Control**
   - Link: User decides when to navigate
   - Navigate: App decides when to navigate
   - Different use cases

4. **Form Flows**
   - Submit form, then redirect
   - Navigate after API success
   - Redirect on error

5. **Authentication**
   - Redirect to login if not authenticated
   - Redirect to dashboard after login
   - Logout and redirect to home

6. **Conditional Logic**
   - Navigate based on conditions
   - Different destinations based on user role
   - Dynamic redirects

7. **Navigation with Data**
   - Pass state during navigation
   - Access data on destination page
   - Complex workflows

## Link Component
```jsx
import { Link } from 'react-router-dom'

// Basic link
<Link to="/about">About</Link>

// With state
<Link to="/users" state={{ from: 'home' }}>Users</Link>
```

## useNavigate Hook
```jsx
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // ... login logic ...
    
    navigate('/dashboard')  // Redirect after login
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

## Navigate Options
```jsx
// Go to path
navigate('/about')

// Go back
navigate(-1)

// Go forward
navigate(1)

// Replace history (no back)
navigate('/login', { replace: true })

// With state
navigate('/users', { state: { id: 123 } })
```

## When to Use What

| Use Link | Use useNavigate |
|----------|-----------------|
| User-triggered | Code-triggered |
| Menu items | After form submit |
| Navigation bars | After API calls |
| Sidebar links | Conditional redirects |
