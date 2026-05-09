import { useState } from 'react'
import Login from './pages/Login'
import Members from './pages/Members'

function App() {
  const [auth, setAuth] = useState(null)

  const handleLogin = (credentials) => {
    setAuth(credentials)
  }

  const handleLogout = () => {
    setAuth(null)
  }

  if (!auth) {
    return <Login onLogin={handleLogin} />
  }

  return <Members auth={auth} onLogout={handleLogout} />
}

export default App
