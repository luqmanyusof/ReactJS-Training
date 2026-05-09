# Topic 16: Form Submit

## What is it?
Handling form submission in React using `onSubmit` and `preventDefault()`.

## Why Handle Form Submit Properly?

1. **Prevent Page Reload**
   - Default form behavior reloads page
   - `e.preventDefault()` stops this
   - Keep React app state intact

2. **Control Submission Process**
   - Validate before sending
   - Transform data if needed
   - Handle success/error states

3. **API Integration**
   - Send data to backend
   - Wait for response
   - Update UI based on result

4. **User Feedback**
   - Show loading while submitting
   - Display success message
   - Show errors if failed

5. **Form Reset**
   - Clear fields after success
   - Reset state to initial values
   - Ready for next entry

6. **Data Validation**
   - Check required fields
   - Validate formats (email, phone)
   - Prevent invalid submissions

7. **Better UX**
   - Submit with Enter key (default form behavior)
   - Disable button while processing
   - Show submission status

## Pattern
```jsx
function Form() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()  // IMPORTANT: Stop page reload
    
    console.log('Form data:', form)
    
    // Send to API here...
    
    setSubmitted(true)
    setForm({ name: '', email: '' })  // Reset
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={...} />
      <input name="email" value={form.email} onChange={...} />
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Key Points
- Always use `e.preventDefault()` first
- Use `type="submit"` on button (or it defaults to submit)
- `onSubmit` on `<form>`, not `onClick` on button
- This enables Enter key submission

## With API
```jsx
async function handleSubmit(e) {
  e.preventDefault()
  setLoading(true)
  
  try {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    setSuccess(true)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}
```
