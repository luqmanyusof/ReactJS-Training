// Topic 15: Multiple Inputs
// Learn how to handle multiple form inputs

import { useState } from 'react'

function App() {
  // Create separate state for each input (simple and clear!)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  return (
    <div>
      <h1>Topic 15: Multiple Inputs</h1>

      <h2>Form</h2>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
      /><br />
      
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      /><br />
      
      <input 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="City" 
      /><br />

      <h2>Current Values</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>City: {city}</p>

      <hr />

      <h2>Simple Pattern</h2>
      <p>1. Each input has its own state variable</p>
      <p>2. Each input has its own onChange handler</p>
      <p>3. Same pattern as Topic 10 - just repeated!</p>
      <p>Note: In Topic 13 you'll learn a shorter way using objects</p>

    </div>
  )
}

export default App
