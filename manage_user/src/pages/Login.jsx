const API = 'https://training-backend-sigma.vercel.app'

function Login({ onLogin }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API}/api/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      })
    })
    const data = await res.json()
    if (data.auth === 'success') {
      onLogin({ username: e.target.username.value, password: e.target.password.value })
    } else {
      alert('Login failed')
    }
  }

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          defaultValue="admin"
          style={{ display: 'block', margin: '5px 0', padding: 8, width: '100%' }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          defaultValue="admin123"
          style={{ display: 'block', margin: '5px 0', padding: 8, width: '100%' }}
        />
        <button type="submit" style={{ margin: '10px 0', padding: 8 }}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
