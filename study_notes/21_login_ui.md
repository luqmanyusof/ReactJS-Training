# Topic 21: Login UI

## What is it?
Building a login form with username/password inputs, handling form state, and preparing for authentication.

## Why Build Login UI Properly?

1. **Security First**
   - `type="password"` hides input
   - Never display passwords in plain text
   - Proper form handling prevents vulnerabilities

2. **User Experience**
   - Clear labels and placeholders
   - Helpful error messages
   - Submit with Enter key support

3. **Form Validation**
   - `required` attribute for browser validation
   - Check empty fields
   - Email format validation

4. **State Management**
   - Track username and password in state
   - Controlled inputs for full control
   - Clear form after submission

5. **Accessibility**
   - Proper `<label>` elements
   - `htmlFor` links label to input
   - Screen reader friendly

6. **Foundation for Auth**
   - Form structure ready for API call
   - Capture credentials properly
   - Handle submission flow

7. **Professional Appearance**
   - Clean, centered form
   - Consistent styling
   - Trust-building design

## Key Elements
```jsx
// Password input - hides characters
<input type="password" name="password" />

// Required validation
<input type="email" required />

// Label association
<label htmlFor="email">Email</label>
<input id="email" name="email" />
```

## Basic Login Form
```jsx
function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Login:', form)
    // Send to API...
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  )
}
```

## Best Practices
- Always use `type="password"` for passwords
- Add `required` to mandatory fields
- Provide clear error feedback
- Disable submit button while processing
