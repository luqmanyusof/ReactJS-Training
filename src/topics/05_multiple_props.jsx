// Topic 5: Multiple Props
// Learn how to pass and use multiple props

// Component with multiple props
function UserCard({ name, email, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  )
}

// Props with default values
function Button({ text = 'Click Me', color = 'blue' }) {
  return <button style={{ backgroundColor: color, color: 'white', padding: '10px' }}>{text}</button>
}

function App() {
  return (
    <div>
      <h1>Topic 5: Multiple Props</h1>

      <h2>Pass Multiple Props</h2>
      <UserCard name="John" email="john@test.com" age={25} />
      <UserCard name="Jane" email="jane@test.com" age={30} />

      <hr />

      <h2>Default Props</h2>
      <p>If no prop is passed, use default value:</p>
      <Button />
      <Button text="Submit" color="green" />
      <Button text="Cancel" color="red" />

      <hr />

      <h2>Prop Types</h2>
      <p>String: name="John"</p>
      <p>Number: age={'{25}'}</p>
      <p>Boolean: isActive={'{true}'}</p>
      <p>Object: user={'{'}{'{ name: "John" }'}{'}'}</p>
      <p>Array: items={'{'}['a', 'b']{'}'}</p>
    </div>
  )
}

export default App
