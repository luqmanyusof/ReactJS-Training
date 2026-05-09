# Topic 14: Simple Form

## What is it?
Creating and handling a basic HTML form in React, preventing page reload, and processing form submissions.

## Why Use Forms?

1. **Collect User Data**
   - Login forms
   - Registration
   - Search inputs
   - Contact forms
   - Any user input collection

2. **Proper Form Semantics**
   - Better accessibility
   - Enter key submission
   - Form validation
   - Browser autofill
   - Professional web apps

3. **Prevent Page Reload**
   - Single Page Application behavior
   - Keep React state intact
   - Better user experience
   - No flickering/reloading

## Basic Form Pattern

```jsx
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()  // Stop page reload!
    console.log('Submitted:', name)
    // Process the data
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Key Concepts

### 1. The `<form>` Element

```jsx
<form onSubmit={handleSubmit}>
  {/* inputs go here */}
  <button type="submit">Submit</button>
</form>
```

**Why use `<form>`?**
- Triggers on Enter key press
- Groups related inputs
- Semantic HTML
- Better accessibility
- Browser validation support

### 2. preventDefault()

```jsx
function handleSubmit(e) {
  e.preventDefault()  // CRITICAL!
  // Your code here
}
```

**Why preventDefault()?**
- Stops browser's default form behavior
- Default behavior: reload page and send GET/POST request
- We want to handle submission with JavaScript
- Keep React state and UI intact

### 3. Submit Button

```jsx
<button type="submit">Submit</button>
```

**Not:**
```jsx
<button onClick={handleSubmit}>Submit</button>  // Less ideal
```

**Why type="submit"?**
- Triggers form's onSubmit
- Works with Enter key
- Proper form semantics
- Better accessibility

## Common Patterns

### After Submission

```jsx
function handleSubmit(e) {
  e.preventDefault()
  
  // 1. Show confirmation
  alert('Form submitted!')
  
  // 2. Clear form
  setName('')
  
  // 3. Show success message
  setSubmitted(true)
  
  // 4. Send to server (later topics)
  // fetch('/api/submit', { method: 'POST', body: data })
}
```

### Disable Submit Button

```jsx
<button type="submit" disabled={!name}>
  Submit
</button>
```

### Validation

```jsx
function handleSubmit(e) {
  e.preventDefault()
  
  if (name.length < 3) {
    alert('Name must be at least 3 characters')
    return
  }
  
  // Process valid data
  console.log('Valid:', name)
}
```

### Loading State

```jsx
const [loading, setLoading] = useState(false)

function handleSubmit(e) {
  e.preventDefault()
  setLoading(true)
  
  // Simulate API call
  setTimeout(() => {
    console.log('Submitted')
    setLoading(false)
  }, 2000)
}

<button type="submit" disabled={loading}>
  {loading ? 'Submitting...' : 'Submit'}
</button>
```

## Complete Example

```jsx
import { useState } from 'react'

function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  function handleSubmit(e) {
    e.preventDefault()
    
    // Validate
    if (!name || !message) {
      alert('Please fill all fields')
      return
    }
    
    // Process
    console.log('Submitting:', { name, message })
    
    // Show success
    setSubmitted(true)
    
    // Clear form
    setName('')
    setMessage('')
    
    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
        <br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
      
      {submitted && <p>Thank you! Message sent.</p>}
    </div>
  )
}
```

## Common Mistakes

### ❌ Forgetting preventDefault

```jsx
function handleSubmit(e) {
  // Missing e.preventDefault()
  console.log('Submit')  // Page reloads, state lost!
}
```

### ❌ Using onClick instead of onSubmit

```jsx
// Not ideal - doesn't work with Enter key
<form>
  <input value={name} onChange={...} />
  <button onClick={handleSubmit}>Submit</button>
</form>
```

### ❌ Not clearing inputs

```jsx
function handleSubmit(e) {
  e.preventDefault()
  console.log(name)
  // Input still has old value!
}
```

### ✅ Correct Pattern

```jsx
function handleSubmit(e) {
  e.preventDefault()        // Prevent reload
  processData(name)         // Use data
  setName('')              // Clear input
  setSubmitted(true)       // Update UI
}
```

## Next Topics
- Topic 15: Text input handling in detail
- Topic 16: Different form elements (dropdown, checkbox, radio)
- Topic 17: Multiple inputs together
- Topic 18: Complex forms with object state

## Key Takeaways
1. Use `<form onSubmit={handler}>`
2. Always `e.preventDefault()` in handler
3. Use `type="submit"` on button
4. Clear inputs after submission
5. Show feedback to user
6. Validate before processing
