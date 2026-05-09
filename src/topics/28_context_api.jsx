// Topic 26: Context API
// Learn how to share data globally without prop drilling

import { createContext, useContext, useState } from 'react'

// 1. Create Context
const ThemeContext = createContext()
const UserContext = createContext()

// 2. Create Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Guest', role: 'visitor' })
  
  const login = (name, role) => setUser({ name, role })
  const logout = () => setUser({ name: 'Guest', role: 'visitor' })
  
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

// 3. Create custom hooks for easier access
function useTheme() {
  return useContext(ThemeContext)
}

function useUser() {
  return useContext(UserContext)
}

// Components that use context
function Header() {
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useUser()
  
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
      color: theme === 'light' ? '#333' : '#fff'
    }}>
      <h2>Header</h2>
      <p>User: {user.name} ({user.role})</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

function Content() {
  const { theme } = useTheme()
  const { user } = useUser()
  
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      color: theme === 'light' ? '#333' : '#fff'
    }}>
      <h2>Content</h2>
      <p>Welcome, {user.name}!</p>
      <p>Your role: {user.role}</p>
      <p>Current theme: {theme}</p>
    </div>
  )
}

function LoginForm() {
  const { login } = useUser()
  const [name, setName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    login(name, 'admin')
    setName('')
  }
  
  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h3>Login</h3>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Login as Admin</button>
    </form>
  )
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div>
          <h1>Topic 26: Context API</h1>
          
          <Header />
          <Content />
          <LoginForm />
          
          <hr />
          
          <h2>What is Context API?</h2>
          <p>✓ Share data across component tree without props</p>
          <p>✓ Avoid prop drilling (passing props through many levels)</p>
          <p>✓ Global state management</p>
          
          <h2>When to Use?</h2>
          <p>✓ Theme (dark/light mode)</p>
          <p>✓ User authentication</p>
          <p>✓ Language preferences</p>
          <p>✓ Shopping cart data</p>
          <p>✓ Any data needed by many components</p>
          
          <h2>Three Steps</h2>
          <p>1. Create Context: createContext()</p>
          <p>2. Provide Context: Provider component</p>
          <p>3. Consume Context: useContext hook</p>
        </div>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
