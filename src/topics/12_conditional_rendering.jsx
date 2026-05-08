// Topic 12: Conditional Rendering
// Learn how to show different content based on conditions

import { useState } from 'react'

function App() {
  const [userRole, setUserRole] = useState('user')
  const [showSecret, setShowSecret] = useState(false)

  return (
    <div>
      <h1>Topic 12: Conditional Rendering</h1>

      <h2>Select User Role</h2>
      <label>
        <input 
          type="radio" 
          value="user" 
          checked={userRole === 'user'} 
          onChange={(e) => setUserRole(e.target.value)} 
        />
        User
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          value="admin" 
          checked={userRole === 'admin'} 
          onChange={(e) => setUserRole(e.target.value)} 
        />
        Admin
      </label>

      <hr />

      <h2>Current Role: {userRole}</h2>

      {/* 1. Using Ternary Operator (? :) */}
      <h3>Welcome Message:</h3>
      <p>{userRole === 'admin' ? 'Welcome Admin! You have full access.' : 'Welcome User! You have limited access.'}</p>

      {/* 2. Using AND Operator (&&) */}
      <h3>Permissions:</h3>
      <ul>
        <li>View Dashboard: ✓</li>
        <li>Edit Posts: ✓</li>
        {userRole === 'admin' && <li>Delete Posts: ✓ (Admin only)</li>}
        {userRole === 'admin' && <li>Manage Users: ✓ (Admin only)</li>}
        {userRole === 'admin' && <li>View Analytics: ✓ (Admin only)</li>}
      </ul>

      {/* 3. Show/Hide with Toggle */}
      <h3>Secret Data:</h3>
      <button onClick={() => setShowSecret(!showSecret)}>
        {showSecret ? 'Hide' : 'Show'} Secret
      </button>
      {showSecret && userRole === 'admin' && (
        <p style={{ color: 'green' }}>Secret admin key: ABC-123-XYZ</p>
      )}
      {showSecret && userRole === 'user' && (
        <p style={{ color: 'red' }}>Access Denied! Admin only.</p>
      )}

      <hr />

      <h2>What You Learned</h2>
      <p>1. Ternary operator: condition ? ifTrue : ifFalse</p>
      <p>2. AND operator: condition && show this</p>
      <p>3. Radio buttons: value + checked + onChange</p>
      <p>4. Multiple conditions: show && role === 'admin'</p>

    </div>
  )
}

export default App
