// Topic 26: localStorage Basics
// Learn how to save data in the browser

import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [savedName, setSavedName] = useState('')

  // Save to localStorage
  function handleSave() {
    localStorage.setItem('userName', name)
    alert('Name saved!')
  }

  // Load from localStorage
  function handleLoad() {
    const stored = localStorage.getItem('userName')
    if (stored) {
      setSavedName(stored)
      alert('Name loaded: ' + stored)
    } else {
      alert('No saved name found!')
    }
  }

  // Delete from localStorage
  function handleDelete() {
    localStorage.removeItem('userName')
    setSavedName('')
    alert('Name deleted!')
  }

  return (
    <div>
      <h1>Topic 26: localStorage Basics</h1>

      <h2>Save Your Name</h2>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
      <br /><br />
      <button onClick={handleSave}>Save to Browser</button>
      <button onClick={handleLoad}>Load from Browser</button>
      <button onClick={handleDelete}>Delete</button>

      <h2>Loaded Name: {savedName || 'None'}</h2>

      <hr />

      <h2>localStorage Methods</h2>
      <p>1. Save: localStorage.setItem('key', 'value')</p>
      <p>2. Load: localStorage.getItem('key')</p>
      <p>3. Delete: localStorage.removeItem('key')</p>
      <p>4. Clear all: localStorage.clear()</p>

      <h2>Important Notes</h2>
      <p>- Data stays even after page refresh!</p>
      <p>- Data stays until you delete it</p>
      <p>- Only stores strings (convert objects with JSON)</p>
      <p>- Try: Save name, refresh page, then Load!</p>

    </div>
  )
}

export default App
