// Topic 12: Event Handling
// Learn how to handle clicks and other events

import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  // Event handler function
  function handleClick() {
    alert('Button clicked!')
    console.info('Button clicked!')
  }

  // Handler with parameter
  function greet(name) {
    alert('Hello, ' + name)
  }

  // Handler with event object
  function handleInput(e) {
    setMessage(e.target.value)
  }

  // Handler with preventDefault
  function handleFormSubmit(e) {
    e.preventDefault()
    alert('Form submitted: ' + message)
  }

  return (
    <div>
      <h1>Topic 12: Event Handling</h1>

      <h2>1. Basic Click</h2>
      <button onClick={handleClick}>Click Me</button>

      <h2>2. Inline Handler</h2>
      <button onClick={() => alert('Inline click!')}>Inline</button>

      <h2>3. Pass Arguments</h2>
      <button onClick={() => greet('Alice')}>Greet Alice</button>
      <button onClick={() => greet('Bob')}>Greet Bob</button>

      <hr />

      <h2>4. Event Object (e)</h2>
      <input type="text" onChange={handleInput} placeholder="Type here" />
      <p>You typed: {message}</p>

      <h2>5. Prevent Default</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={message} onChange={handleInput} placeholder="Enter text" />
        <button type="submit">Submit (no reload!)</button>
      </form>

      <hr />

      <h2>Common Events</h2>
      <p>onClick - when clicked</p>
      <p>onChange - when input changes</p>
      <p>onSubmit - when form submits</p>
      <p>onMouseEnter - when mouse enters</p>
      <p>onKeyDown - when key pressed</p>

      <h2>Event Object (e)</h2>
      <p>e.target.value - get input value</p>
      <p>e.preventDefault() - stop default action</p>

    </div>
  )
}

export default App
