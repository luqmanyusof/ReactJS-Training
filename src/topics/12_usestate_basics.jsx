// Topic 12: useState Basics
// Learn how to manage state (data that changes)

import { useState } from 'react'

function App() {
  // Create state: [value, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Guest')

  // Object state
  const [user, setUser] = useState({ name: 'John', age: 25 })

  // Array state
  const [items, setItems] = useState(['Apple', 'Banana'])

  return (
    <div>
      <h1>Topic 12: useState Basics</h1>

      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+ Add</button>
      <button onClick={() => setCount(count - 1)}>- Subtract</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>Text Example</h2>
      <p>Hello, {name}!</p>
      <button onClick={() => setName('Alice')}>Set Alice</button>
      <button onClick={() => setName('Bob')}>Set Bob</button>

      <h2>Object State (Preview)</h2>
      <p>{user.name} is {user.age} years old</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>Birthday</button>
      <button onClick={() => setUser({ ...user, name: 'Jane' })}>Change Name</button>
      <p>Note: You'll learn this pattern in detail in Topic 13</p>

      <h2>Array State (Preview)</h2>
      <p>Items: {items.join(', ')}</p>
      <button onClick={() => setItems([...items, 'Orange'])}>Add Orange</button>
      <button onClick={() => setItems(items.filter((item, i) => i !== 0))}>Remove First</button>
      <p>Note: You'll use this pattern in Topics 25-27 (CRUD)</p>

      <hr />

      <h2>Key Patterns</h2>
      <p>Update object: setUser(&#123; ...user, age: 26 &#125;)</p>
      <p>Add to array: setItems([...items, 'new'])</p>
      <p>Remove from array: setItems(items.filter(...))</p>

      <h2>Rules</h2>
      <p>1. Call useState at top of component</p>
      <p>2. Never call inside loops or if statements</p>
      <p>3. Always use setter function to update</p>
      <p>4. Use spread operator for objects and arrays</p>
    </div>
  )
}

export default App
