# Topic 11: Multiple Inputs

## What is it?
Managing multiple form inputs efficiently using object state and a single handler function.

## Why Use Object State for Forms?

1. **Scalability**
   - One state object for all fields
   - Add new fields without new useState calls
   - Cleaner code as forms grow

2. **Single Handler Function**
   - One `handleChange` for all inputs
   - Use `name` attribute to identify field
   - Less code duplication

3. **Easy Form Submission**
   - All data in one object
   - Send entire object to API
   - No need to gather from multiple states

4. **Form Reset**
   - Reset all fields with one setState
   - `setForm({ name: '', email: '', phone: '' })`
   - Simpler reset logic

5. **Grouped Data**
   - Related fields stay together
   - Logical organization
   - Mirrors backend data structure

6. **Spread Operator Power**
   - Keep existing fields: `...form`
   - Update one field: `[name]: value`
   - Immutable updates made easy

7. **Validation**
   - Validate entire form object
   - Check all required fields
   - Return form-level errors

## Pattern
```jsx
const [form, setForm] = useState({
  name: '',
  email: '',
  phone: ''
})

function handleChange(e) {
  const { name, value } = e.target
  setForm({
    ...form,           // Keep other fields
    [name]: value      // Update this field
  })
}

// All inputs use same handler
<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
<input name="phone" value={form.phone} onChange={handleChange} />
```

## Key Concept: Computed Property Names
```jsx
const field = 'email'
const obj = { [field]: 'test@mail.com' }
// Result: { email: 'test@mail.com' }
```

This lets us dynamically set which field to update based on the input's `name` attribute.
