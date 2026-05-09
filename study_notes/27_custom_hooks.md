# Topic 25: Custom Hooks

## What is it?
JavaScript functions that use React hooks and allow you to extract and reuse component logic across multiple components.

## Why Use Custom Hooks?

1. **Reusable Logic**
   - Extract common patterns
   - Use same logic in multiple components
   - Write once, use everywhere

2. **Cleaner Components**
   - Move complex logic out of components
   - Components focus on UI
   - Easier to read and maintain

3. **Better Organization**
   - Group related logic together
   - Separate concerns clearly
   - Logical code structure

4. **Easier Testing**
   - Test hooks independently
   - Mock custom hooks in tests
   - More testable code

5. **DRY Principle**
   - Don't Repeat Yourself
   - Reduce code duplication
   - Single source of truth

## Naming Convention

**Must start with "use"**
- `useLocalStorage`
- `useToggle`
- `useFetch`
- `useCounter`

This tells React it's a hook and should follow hook rules.

## Basic Structure

```jsx
import { useState, useEffect } from 'react'

function useCustomHook(initialValue) {
  const [state, setState] = useState(initialValue)
  
  // Hook logic here
  useEffect(() => {
    // Side effects
  }, [])
  
  // Return what components need
  return [state, setState]
}
```

## Common Custom Hooks

### 1. useLocalStorage
```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

// Usage
const [name, setName] = useLocalStorage('name', '')
```

### 2. useToggle
```jsx
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue(prev => !prev)
  return [value, toggle]
}

// Usage
const [isOpen, toggleOpen] = useToggle(false)
```

### 3. useFetch
```jsx
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

// Usage
const { data, loading, error } = useFetch('/api/users')
```

## Rules for Custom Hooks

1. **Name must start with "use"**
   - Enforced by React linter
   - Signals it's a hook

2. **Can call other hooks**
   - useState, useEffect, etc.
   - Other custom hooks
   - Follow hook rules inside

3. **Only call from React functions**
   - Components
   - Other custom hooks
   - Not regular JavaScript functions

4. **Call at top level**
   - No loops, conditions, nested functions
   - Same as built-in hooks

## When to Create Custom Hook?

**Create when:**
- Same logic used in 2+ components
- Logic is complex and reusable
- Want to encapsulate behavior
- Testing logic separately

**Don't create when:**
- Logic used once
- Simple one-liners
- Already a library hook available

## Benefits Over Regular Functions

```jsx
// Regular function - can't use hooks!
function getUser() {
  // ❌ Can't use useState or useEffect here
  return user
}

// Custom hook - can use hooks!
function useUser() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Fetch user
  }, [])
  return user
}
```

## Best Practices

1. Return arrays for simple state: `[value, setValue]`
2. Return objects for multiple values: `{ data, loading, error }`
3. Use descriptive names: `useAuth`, `useWindowSize`
4. Document parameters and return values
5. Keep hooks focused on one thing
6. Extract truly reusable logic only
