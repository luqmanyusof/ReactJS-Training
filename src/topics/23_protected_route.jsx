// Topic 23: Protected Route
// Learn how to protect pages that require login

import { useState, useEffect } from 'react'

function App() {
  const [page, setPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'))
  }, [])

  function login() {
    localStorage.setItem('token', 'abc')
    setIsLoggedIn(true)
    setPage('dashboard')
  }

  function logout() {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setPage('home')
  }

  function goToDashboard() {
    if (isLoggedIn) {
      setPage('dashboard')
    } else {
      alert('Please login first!')
      setPage('login')
    }
  }

  return (
    <div>
      <h1>Topic 23: Protected Route</h1>

      <h2>Navigation</h2>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('login')}>Login</button>
      <button onClick={goToDashboard}>Dashboard (Protected)</button>

      <h2>Page</h2>
      {page === 'home' && <p>Home - Public page</p>}
      {page === 'login' && <button onClick={login}>Click to Login</button>}
      {page === 'dashboard' && isLoggedIn && (
        <div>
          <p>Dashboard - You are logged in!</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}

    </div>
  )
}

export default App
