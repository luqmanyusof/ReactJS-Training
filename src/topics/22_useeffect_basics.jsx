// Topic 22: useEffect Basics
// Learn how to run code after render (side effects)

import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Run once when component loads
  useEffect(() => {
    console.log('Component loaded!')
  }, [])  // Empty array = run once

  // Run when count changes
  useEffect(() => {
    document.title = 'Count: ' + count
    console.log('Count changed to:', count)
  }, [count])  // Run when count changes

  // Cleanup example - timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)

    // Cleanup function
    return () => {
      clearInterval(timer)
      console.log('Timer cleaned up!')
    }
  }, [])

  return (
    <div>
      <h1>Topic 22: useEffect Basics</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Check the browser tab title!</p>

      <h2>Timer: {seconds} seconds</h2>
      <p>Timer runs in background with cleanup!</p>

      <hr />

      <h2>Three useEffect Patterns</h2>
      <p>1. Run once: useEffect(() =&gt; &#123;...&#125;, [])</p>
      <p>2. Run on change: useEffect(() =&gt; &#123;...&#125;, [count])</p>
      <p>3. Cleanup: useEffect(() =&gt; &#123; return () =&gt; cleanup &#125;)</p>

    </div>
  )
}

export default App
