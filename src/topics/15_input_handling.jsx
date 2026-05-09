// Topic 15: Input Handling
// Learn how to handle form inputs with state

import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <h1>Topic 15: Input Handling</h1>

      <h2>Text Input</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>You typed: {name}</p>

      <h2>Email Input</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <p>Email: {email}</p>

      <hr />

      <h2>Controlled Input Pattern</h2>
      <p>1. Create state: const [name, setName] = useState('')</p>
      <p>2. Set value prop: value=&#123;name&#125;</p>
      <p>3. Set onChange: onChange=(e) =&gt; setName(e.target.value)</p>
      <p>React controls the input value (controlled component)</p>

    </div>
  )
}

export default App
