# Topic 9: useState Basics

## What is useState?
A React Hook that lets you add state (changeable data) to functional components.

## Why Use useState?

1. **Dynamic UI Updates**
   - When state changes, UI re-renders automatically
   - No manual DOM manipulation
   - React handles all updates efficiently

2. **Component Memory**
   - Remember values between renders
   - Track user interactions
   - Maintain component's own data

3. **Interactive Features**
   - Counters, toggles, forms
   - Show/hide elements
   - Any changing data

4. **Trigger Re-renders**
   - Only way to make React update UI
   - `setState` tells React something changed
   - Component function runs again with new value

5. **Isolation**
   - Each component has its own state
   - Multiple instances don't share state
   - Independent component behavior

6. **Simple API**
   - Just `[value, setValue] = useState(initial)`
   - Easy to learn and use
   - Consistent pattern

7. **Functional Components**
   - No need for class components
   - Cleaner, more readable code
   - Modern React pattern

## Syntax
```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  //     ↑        ↑              ↑
  //   value   setter      initial value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}
```

## Rules
1. Call useState at TOP of component
2. Never call inside loops, conditions, or nested functions
3. Always use setter function, never mutate directly
4. Previous state: `setCount(prev => prev + 1)`

## State Types
```jsx
const [count, setCount] = useState(0)           // Number
const [name, setName] = useState('')            // String
const [isOpen, setIsOpen] = useState(false)     // Boolean
const [user, setUser] = useState(null)          // Object/null
const [items, setItems] = useState([])          // Array
```
