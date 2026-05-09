// Topic 21: useRef Hook
// Learn how to access DOM elements and store values without re-rendering

import { useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)
  const renderCount = useRef(0)

  // Increment render count on every render
  renderCount.current = renderCount.current + 1

  // Focus the input when button is clicked
  function handleFocus() {
    inputRef.current.focus()
  }

  // Get input value without state
  function handleGetValue() {
    alert('Input value: ' + inputRef.current.value)
  }

  return (
    <div>
      <h1>Topic 21: useRef Hook</h1>

      <h2>Example 1: Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <br /><br />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleGetValue}>Get Value</button>

      <hr />

      <h2>Example 2: Track Renders (No Re-render)</h2>
      <p>Component rendered: {renderCount.current} times</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Notice: Render count updates without causing re-render!</p>

      <hr />

      <h2>useRef vs useState</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Feature</th>
            <th>useRef</th>
            <th>useState</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Triggers re-render?</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Persists between renders?</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Access DOM elements?</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Update UI?</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Common Use Cases</h2>
      <p>✓ Access DOM elements (focus, scroll, measure)</p>
      <p>✓ Store previous values</p>
      <p>✓ Keep timers/intervals IDs</p>
      <p>✓ Store values that don't need to trigger re-render</p>

    </div>
  )
}

export default App
