# Topic 22: Loading and Error States

## What is it?
Managing three states in async operations: loading, error, and success.

## Why Handle All Three States?

1. **Better User Experience**
   - Users know something is happening
   - Not left staring at blank screen
   - Clear feedback on status

2. **Error Communication**
   - Tell users what went wrong
   - Offer retry options
   - Don't fail silently

3. **Professional Applications**
   - Production apps need error handling
   - Graceful degradation
   - User trust

4. **Debugging**
   - See which state failed
   - Console logs during loading
   - Error messages for debugging

5. **Conditional UI**
   - Show spinner while loading
   - Show error message if failed
   - Show content on success

6. **Prevent Crashes**
   - try/catch prevents app crashes
   - Errors caught and handled
   - App continues working

7. **Retry Functionality**
   - Let users try again
   - Network issues are common
   - Recovery from failures

## Three State Pattern
```jsx
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true)
      setError(null)
      
      const res = await fetch('/api/data')
      const json = await res.json()
      setData(json)
      
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  fetchData()
}, [])
```

## UI Rendering
```jsx
// Loading state
{loading && <Spinner />}

// Error state
{error && <p className="error">Error: {error}</p>}

// Success state
{!loading && !error && (
  <ul>
    {data.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
)}
```

## State Flow

```
Start → Loading (true) → Fetch
                           ↓
              Success → setData() → Loading (false)
                           ↓
               Error → setError() → Loading (false)
```

## Best Practices
- Always show loading indicator
- Display user-friendly error messages
- Provide retry button on errors
- Use `finally` to ensure loading is set to false
