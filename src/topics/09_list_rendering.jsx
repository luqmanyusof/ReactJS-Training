// Topic 9: List Rendering
// Learn how to display arrays using map()

function App() {
  // Simple array
  const fruits = ['Apple', 'Banana', 'Orange']

  // Array of objects
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 28 }
  ]

  return (
    <div>
      <h1>Topic 9: List Rendering</h1>

      <h2>Simple Array</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h2>Array of Objects</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.age} years old</li>
        ))}
      </ul>

      <hr />

      <h2>How map() Works</h2>
      <p>map() creates a new array by transforming each item</p>
      <p>Syntax: array.map((item, index) =&gt; newItem)</p>
      <p>Always return JSX for each item</p>
      <p>Always add a unique key prop</p>

    </div>
  )
}

export default App
