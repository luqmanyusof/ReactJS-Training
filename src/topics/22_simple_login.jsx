// Topic 22: Simple Login
// Learn how to build a basic login with localStorage

import { useState, useEffect } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')

  // Check if already logged in when page loads
  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  function handleLogin(e) {
    e.preventDefault()
    
    // Simple check: username is "admin" and password is "1234"
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('userToken', 'logged-in')
      setIsLoggedIn(true)
      setError('')
    } else {
      setError('Wrong username or password! Try: admin / 1234')
    }
  }

  function handleLogout() {
    localStorage.removeItem('userToken')
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
  }

  // Show welcome page if logged in
  if (isLoggedIn) {
    return (
      <div>
        <h1>Topic 22: Simple Login</h1>
        <h2>Welcome!</h2>
        <p>You are logged in.</p>
        <button onClick={handleLogout}>Logout</button>
        
        <hr />
        
        <h2>Try This</h2>
        <p>1. Refresh the page - you stay logged in!</p>
        <p>2. Close browser and reopen - still logged in!</p>
        <p>3. Click Logout to clear localStorage</p>
      </div>
    )
  }

  // Show login form
  return (
    <div>
      <h1>Topic 22: Simple Login</h1>
      
      <h2>Login Form</h2>
      <p>Try: admin / 1234</p>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <label>Username:</label><br />
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
        /><br /><br />

        <label>Password:</label><br />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      <hr />

      <h2>How It Works</h2>
      <p>1. Check if username and password match</p>
      <p>2. If correct: save token to localStorage</p>
      <p>3. On page load: check if token exists</p>
      <p>4. If token exists: auto-login!</p>
      <p>5. Logout: remove token from localStorage</p>

    </div>
  )
}

export default App
