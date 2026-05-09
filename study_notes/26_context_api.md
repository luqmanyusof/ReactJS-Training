# Topic 26: Context API

## What is it?
A React feature that allows you to share data across the entire component tree without passing props manually at every level.

## Why Use Context API?

1. **Avoid Prop Drilling**
   - Don't pass props through many components
   - Cleaner component structure
   - Less boilerplate code

2. **Global State Management**
   - Share data across entire app
   - Central data store
   - Simple alternative to Redux

3. **Cleaner Code**
   - Components get only needed data
   - No intermediate components cluttered with props
   - Better separation of concerns

4. **Better for Common Data**
   - Theme settings
   - User authentication
   - Language preferences
   - Any app-wide data

## The Problem (Prop Drilling)

```jsx
// ❌ Prop drilling - passing props through many levels
function App() {
  const [user, setUser] = useState(null)
  return <Layout user={user} />
}

function Layout({ user }) {
  return <Header user={user} />  // Just passing through
}

function Header({ user }) {
  return <Profile user={user} />  // Just passing through
}

function Profile({ user }) {
  return <div>{user.name}</div>  // Finally used!
}
```

## The Solution (Context API)

```jsx
// ✅ Context - components access data directly
const UserContext = createContext()

function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  )
}

function Profile() {
  const user = useContext(UserContext)  // Direct access!
  return <div>{user.name}</div>
}
```

## Three Steps to Use Context

### Step 1: Create Context
```jsx
import { createContext } from 'react'

const ThemeContext = createContext()
```

### Step 2: Provide Context
```jsx
function App() {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <YourComponents />
    </ThemeContext.Provider>
  )
}
```

### Step 3: Consume Context
```jsx
import { useContext } from 'react'

function Button() {
  const { theme, setTheme } = useContext(ThemeContext)
  
  return (
    <button onClick={() => setTheme('dark')}>
      Current theme: {theme}
    </button>
  )
}
```

## Better Pattern: Custom Hook

```jsx
// Create custom hook
function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

// Usage - cleaner!
function Button() {
  const { theme, setTheme } = useTheme()
  return <button>...</button>
}
```

## Complete Example

```jsx
// 1. Create Context
const AuthContext = createContext()

// 2. Create Provider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  
  const login = (userData) => setUser(userData)
  const logout = () => setUser(null)
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 3. Custom hook
function useAuth() {
  return useContext(AuthContext)
}

// 4. Use in components
function LoginButton() {
  const { login } = useAuth()
  return <button onClick={() => login({ name: 'John' })}>Login</button>
}

// 5. Wrap app
function App() {
  return (
    <AuthProvider>
      <YourApp />
    </AuthProvider>
  )
}
```

## When to Use Context?

**Use Context when:**
- Data needed by many components
- Avoiding deep prop drilling
- Theme, auth, language settings
- Data changes infrequently

**Don't use Context when:**
- Data changes very frequently
- Need complex state logic (use Redux/Zustand)
- Only 1-2 levels deep (just use props)
- Performance is critical (context re-renders all consumers)

## Multiple Contexts

```jsx
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <YourApp />
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
```

## Performance Tip

```jsx
// Split contexts if values update separately
<ThemeContext.Provider value={theme}>
  <UserContext.Provider value={user}>
    <App />
  </UserContext.Provider>
</ThemeContext.Provider>
```

## Common Use Cases

1. **Theme switching** (dark/light mode)
2. **User authentication** (logged in user data)
3. **Language/locale** (i18n)
4. **Shopping cart** (e-commerce)
5. **Notifications** (toast messages)
