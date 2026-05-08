# Topic 16: useEffect Basics

## What is useEffect?
A React Hook for performing side effects in functional components - code that runs after render.

## Why Use useEffect?

1. **Side Effects Management**
   - Fetch data from APIs
   - Set up subscriptions
   - Update document title
   - Interact with browser APIs

2. **Lifecycle Replacement**
   - Replaces componentDidMount
   - Replaces componentDidUpdate
   - Replaces componentWillUnmount
   - One Hook for all lifecycle needs

3. **Dependency Control**
   - Run once on mount: `[]`
   - Run when value changes: `[value]`
   - Full control over when effect runs

4. **Cleanup Function**
   - Prevent memory leaks
   - Cancel subscriptions
   - Clear timers
   - Runs before component unmounts

5. **Synchronization**
   - Keep component in sync with external systems
   - Update when dependencies change
   - React manages the timing

6. **Separation from Render**
   - Side effects don't block rendering
   - Better performance
   - Cleaner component logic

7. **Multiple Effects**
   - Separate concerns into different useEffects
   - Each handles one responsibility
   - Easier to maintain

## Dependency Array Patterns

| Pattern | When It Runs |
|---------|--------------|
| `useEffect(() => {}, [])` | Once on mount |
| `useEffect(() => {}, [count])` | When count changes |
| `useEffect(() => {})` | Every render (rare) |

## Syntax
```jsx
import { useEffect } from 'react'

// Run once on mount
useEffect(() => {
  console.log('Component mounted')
  document.title = 'My App'
}, [])

// Run when count changes
useEffect(() => {
  document.title = `Count: ${count}`
}, [count])

// With cleanup
useEffect(() => {
  const timer = setInterval(() => {}, 1000)
  
  return () => {
    clearInterval(timer)  // Cleanup
  }
}, [])
```

## Common Use Cases
- Fetching data on component load
- Setting up event listeners
- Updating document title
- Syncing with localStorage
- Timers and intervals
