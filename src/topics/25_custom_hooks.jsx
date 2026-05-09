// Topic 25: Custom Hooks
// Learn how to create reusable hooks to extract component logic

import { useState, useEffect } from 'react'

// Custom Hook 1: useLocalStorage
function useLocalStorage(key, initialValue) {
  // Get from localStorage or use initial value
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : initialValue
  })

  // Save to localStorage whenever value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

// Custom Hook 2: useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  
  const toggle = () => setValue(prev => !prev)
  
  return [value, toggle]
}

// Custom Hook 3: useCounter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  
  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(initialValue)
  
  return { count, increment, decrement, reset }
}

function App() {
  // Using custom hooks
  const [name, setName] = useLocalStorage('userName', '')
  const [isDarkMode, toggleDarkMode] = useToggle(false)
  const counter = useCounter(0)

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#333',
      minHeight: '100vh'
    }}>
      <h1>Topic 25: Custom Hooks</h1>

      <h2>Example 1: useLocalStorage Hook</h2>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Saved name: {name}</p>
      <p>Refresh page - your name persists!</p>

      <hr />

      <h2>Example 2: useToggle Hook</h2>
      <button onClick={toggleDarkMode}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p>Current mode: {isDarkMode ? 'Dark' : 'Light'}</p>

      <hr />

      <h2>Example 3: useCounter Hook</h2>
      <p>Count: {counter.count}</p>
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.reset}>Reset</button>

      <hr />

      <h2>What are Custom Hooks?</h2>
      <p>✓ Functions that use React hooks inside</p>
      <p>✓ Name must start with "use"</p>
      <p>✓ Extract and reuse component logic</p>
      <p>✓ Share stateful logic between components</p>

      <h2>Benefits</h2>
      <p>✓ Reusable code across components</p>
      <p>✓ Cleaner component code</p>
      <p>✓ Easier to test</p>
      <p>✓ DRY principle (Don't Repeat Yourself)</p>

      <h2>Rules</h2>
      <p>1. Name must start with "use"</p>
      <p>2. Can call other hooks inside</p>
      <p>3. Only call from React functions</p>
      <p>4. Follow all hook rules</p>

    </div>
  )
}

export default App
