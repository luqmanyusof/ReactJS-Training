// Topic 5: Component Composition
// Learn how to nest components inside other components

// Card component uses children prop
function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

// Simple Button component
function Button({ children }) {
  return <button>{children}</button>
}

function App() {
  return (
    <div>
      <h1>Topic 5: Component Composition</h1>

      <h2>Nesting Components</h2>
      <Card title="User Profile">
        <p>Name: John Doe</p>
        <p>Email: john@test.com</p>
        <Button>Edit</Button>
      </Card>

      <Card title="Product">
        <p>React Course - $99</p>
        <Button>Buy Now</Button>
      </Card>

    </div>
  )
}

export default App
