// Topic 7: Key in List
// Learn why key prop is important in lists

function App() {
  const users = [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Bob' },
    { id: 103, name: 'Charlie' }
  ]

  return (
    <div>
      <h1>Topic 7: Key in List</h1>

      <h2>Good: Use unique ID as key</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Okay: Use index for static lists</h2>
      <ul>
        {['Apple', 'Banana', 'Cherry'].map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <hr />

      <h2>Why Keys Matter</h2>
      <p>React uses keys to track which items changed.</p>
      <p>Keys must be unique among siblings.</p>
      <p>Use ID from data when possible.</p>

      <h2>When to use index</h2>
      <p>OK: List never changes (static)</p>
      <p>BAD: List can add/remove/reorder items</p>
    </div>
  )
}

export default App
