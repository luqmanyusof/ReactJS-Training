// Topic 14: Simple Form
// Learn how to create a basic form and handle submission

import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()  // Prevent page reload
    setSubmittedName(name)
    setSubmitted(true)
    setName('')  // Clear input
  }

  return (
    <div>
      <h1>Topic 14: Simple Form</h1>

      <h2>Basic Form Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name: 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e0ffe0' }}>
          <h3>Form Submitted!</h3>
          <p>Hello, {submittedName}!</p>
        </div>
      )}

      <hr />

      <h2>How It Works</h2>
      <pre>{`1. Create form with onSubmit
<form onSubmit={handleSubmit}>

2. Prevent page reload in handler
function handleSubmit(e) {
  e.preventDefault()  // Important!
  // Process form data
}

3. Submit button inside form
<button type="submit">Submit</button>
`}</pre>

      <h2>Key Points</h2>
      <p>✓ Use &lt;form&gt; with onSubmit</p>
      <p>✓ Always call e.preventDefault()</p>
      <p>✓ Button type="submit" triggers form submission</p>
      <p>✓ Can validate before submitting</p>
      <p>✓ Clear inputs after successful submit</p>
    </div>
  )
}

export default App
