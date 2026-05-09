# Topic 19: useRef Hook

## What is it?
A React Hook that creates a mutable reference that persists across re-renders without causing re-renders when updated.

## Why Use useRef?

1. **Access DOM Elements**
   - Focus inputs programmatically
   - Measure element dimensions
   - Scroll to elements
   - Direct DOM manipulation when needed

2. **Store Mutable Values**
   - Keep values between renders
   - No re-render when value changes
   - Like instance variables in class components

3. **Preserve Data Across Renders**
   - Store previous prop/state values
   - Keep timer/interval IDs
   - Cache expensive computations

4. **Performance Optimization**
   - Avoid unnecessary re-renders
   - Update values without triggering render cycle
   - Efficient for frequently changing data

## Syntax

```jsx
import { useRef } from 'react'

function Component() {
  const ref = useRef(initialValue)
  
  // Access: ref.current
  // Update: ref.current = newValue
}
```

## Two Main Use Cases

### 1. Access DOM Elements
```jsx
const inputRef = useRef(null)

<input ref={inputRef} />

// Focus the input
inputRef.current.focus()

// Get value
inputRef.current.value
```

### 2. Store Values Without Re-render
```jsx
const countRef = useRef(0)

// Update without re-render
countRef.current = countRef.current + 1
```

## useRef vs useState

| Feature | useRef | useState |
|---------|--------|----------|
| Triggers re-render | ❌ No | ✅ Yes |
| Persists between renders | ✅ Yes | ✅ Yes |
| Access DOM | ✅ Yes | ❌ No |
| Update UI | ❌ No | ✅ Yes |

## When to Use

- **useRef**: Need DOM access or non-rendering data
- **useState**: Need to update UI when value changes

## Common Patterns

```jsx
// 1. Focus input on mount
useEffect(() => {
  inputRef.current.focus()
}, [])

// 2. Store previous value
const prevValue = useRef()
useEffect(() => {
  prevValue.current = value
})

// 3. Keep interval ID
const intervalId = useRef()
intervalId.current = setInterval(...)
clearInterval(intervalId.current)
```

## Important Notes

- Changing `ref.current` does NOT trigger re-render
- `ref.current` is mutable (can be changed directly)
- Don't read/write refs during rendering
- Use refs in event handlers or effects
