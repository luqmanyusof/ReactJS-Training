// Topic 7: Multiple Props
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

// Component with multiple different prop types
function ProductCard({ name, price, inStock }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Topic 7: Multiple Props</h1>

      <h2>Pass Multiple Props</h2>
      <UserCard name="John" email="john@test.com" age={25} />
      <UserCard name="Jane" email="jane@test.com" age={30} />

      <hr />

      <h2>Different Prop Types</h2>
      <ProductCard name="Laptop" price={999} inStock={true} />
      <ProductCard name="Mouse" price={25} inStock={false} />

      <hr />

      <h2>Understanding Prop Types</h2>
      <p>✓ String: name="John"</p>
      <p>✓ Number: age={'{25}'} (use curly braces!)</p>
      <p>✓ Boolean: isActive={'{true}'}</p>
      <p>✓ Object: user={'{'}{'{ name: "John" }'}{'}'}</p>
      <p>✓ Array: items={'{'}['a', 'b']{'}'}</p>

      <h2>Key Points</h2>
      <p>• All props passed from parent to child</p>
      <p>• Props are read-only in child component</p>
      <p>• Use destructuring for cleaner code</p>
      <p>• Next topic: Default values for optional props</p>
    </div>
  )
}

export default App
