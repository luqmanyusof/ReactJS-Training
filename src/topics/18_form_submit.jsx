// Topic 18: Form Submit
// Learn how to handle form submission and use object state

import { useState } from 'react'

function App() {
  // Object state - keeps related data together
  const [form, setForm] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(null)

  // One handler for all inputs using object state
  function handleChange(e) {
    const inputName = e.target.name   // Get input name (e.g., "email")
    const inputValue = e.target.value // Get input value
    
    // Create new object with old data + updated field
    setForm({ 
      ...form,              // Copy all old fields
      [inputName]: inputValue  // Update this one field
    })
  }

  function handleSubmit(e) {
    e.preventDefault()  // Stop page reload!
    console.log('Submitted:', form)
    setSubmitted(form)
    setForm({ name: '', email: '' })  // Clear form
  }

  return (
    <div>
      <h1>Topic 18: Form Submit</h1>

      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Name" 
        /><br />
        
        <input 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="Email" 
        /><br />
        
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
        </div>
      )}

      <hr />

      <h2>Object State Pattern (Advanced)</h2>
      <p>Instead of: const [name, setName] = useState('')</p>
      <p>Use: const [form, setForm] = useState(&#123; name: '', email: '' &#125;)</p>
      <p>Benefit: Keep related data together!</p>
      <p>Update: setForm(&#123; ...form, name: 'new value' &#125;)</p>
      
      <h2>Form Submit Steps</h2>
      <p>1. Add onSubmit to form element</p>
      <p>2. Call e.preventDefault() to stop page reload</p>
      <p>3. Access form data from state</p>
      <p>4. Process data (send to API, etc.)</p>
      <p>5. Clear form: setForm(&#123; name: '', email: '' &#125;)</p>

    </div>
  )
}

export default App
