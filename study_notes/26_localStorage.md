# Topic 26: localStorage

## What is it?
Browser storage that persists data even after closing the browser. Data saved in localStorage stays until explicitly deleted.

## Why Use localStorage?

1. **Persistent Data**
   - Save data between sessions
   - Survives page refreshes
   - Survives browser restarts
   - No server needed

2. **User Preferences**
   - Remember theme settings
   - Save form data
   - Keep user choices
   - Improve user experience

3. **Simple API**
   - Easy to use
   - Just 3 main methods
   - Synchronous (no promises needed)
   - Built into all browsers

4. **Client-Side Storage**
   - No backend required
   - Works offline
   - Fast access
   - 5-10MB storage per domain

## Basic API

### setItem - Save Data
```jsx
localStorage.setItem('key', 'value')
localStorage.setItem('name', 'John')
localStorage.setItem('age', '25')
```

### getItem - Retrieve Data
```jsx
const name = localStorage.getItem('name')  // 'John'
const age = localStorage.getItem('age')    // '25'
const missing = localStorage.getItem('xyz') // null
```

### removeItem - Delete Data
```jsx
localStorage.removeItem('name')  // Deletes 'name'
```

### clear - Delete All
```jsx
localStorage.clear()  // Removes everything
```

## Storing Objects/Arrays

**Must use JSON!** localStorage only stores strings.

```jsx
// Save object
const user = { name: 'John', age: 25 }
localStorage.setItem('user', JSON.stringify(user))

// Retrieve object
const savedUser = JSON.parse(localStorage.getItem('user'))

// Save array
const items = ['apple', 'banana']
localStorage.setItem('items', JSON.stringify(items))

// Retrieve array
const savedItems = JSON.parse(localStorage.getItem('items'))
```

## With React useState

```jsx
function App() {
  const [name, setName] = useState('')
  
  // Save to localStorage
  function handleSave() {
    localStorage.setItem('userName', name)
  }
  
  // Load from localStorage
  function handleLoad() {
    const saved = localStorage.getItem('userName')
    if (saved) setName(saved)
  }
  
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleLoad}>Load</button>
    </div>
  )
}
```

## Initialize State from localStorage

```jsx
// Load saved value on mount
const [name, setName] = useState(() => {
  const saved = localStorage.getItem('name')
  return saved || 'Guest'
})

// Auto-save when state changes
useEffect(() => {
  localStorage.setItem('name', name)
}, [name])
```

## Common Use Cases

1. **Theme Preference**
```jsx
localStorage.setItem('theme', 'dark')
const theme = localStorage.getItem('theme')
```

2. **Form Data**
```jsx
localStorage.setItem('draft', formData)
```

3. **User Settings**
```jsx
const settings = { lang: 'en', notifications: true }
localStorage.setItem('settings', JSON.stringify(settings))
```

4. **Shopping Cart**
```jsx
localStorage.setItem('cart', JSON.stringify(cartItems))
```

## Important Limits

| Feature | Value |
|---------|-------|
| Storage Size | 5-10 MB |
| Data Type | Strings only |
| Scope | Per domain |
| Persistence | Until deleted |
| Security | NOT secure |

## Security Warning

**⚠️ Never store sensitive data!**

```jsx
// ❌ DON'T store:
localStorage.setItem('password', 'secret123')
localStorage.setItem('creditCard', '1234-5678-9012-3456')
localStorage.setItem('apiKey', 'sk-...')

// ✅ DO store:
localStorage.setItem('theme', 'dark')
localStorage.setItem('language', 'en')
localStorage.setItem('userName', 'john')
```

- localStorage is NOT encrypted
- Accessible via JavaScript
- Vulnerable to XSS attacks
- Anyone with browser access can see it

## localStorage vs sessionStorage

| Feature | localStorage | sessionStorage |
|---------|--------------|----------------|
| Persistence | Permanent | Tab session only |
| Scope | Whole domain | Single tab |
| Survives close | Yes | No |
| Use case | Long-term | Temporary |

## Best Practices

1. **Always check if data exists**
```jsx
const data = localStorage.getItem('key')
if (data) {
  // Use data
}
```

2. **Use try-catch for JSON**
```jsx
try {
  const obj = JSON.parse(localStorage.getItem('key'))
} catch (error) {
  console.error('Invalid JSON')
}
```

3. **Set defaults**
```jsx
const theme = localStorage.getItem('theme') || 'light'
```

4. **Clear old data**
```jsx
// Remove outdated entries
localStorage.removeItem('oldKey')
```

5. **Check storage availability**
```jsx
function isLocalStorageAvailable() {
  try {
    localStorage.setItem('test', 'test')
    localStorage.removeItem('test')
    return true
  } catch (e) {
    return false
  }
}
```
