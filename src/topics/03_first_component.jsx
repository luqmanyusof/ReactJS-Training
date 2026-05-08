// Topic 3: First Component
// Learn how to create and use components

// Component 1: Header
function Header() {
  return <h1>My Website</h1>
}

// Component 2: Greeting
function Greeting() {
  return <p>Welcome to our site!</p>
}

// Component 3: Footer
function Footer() {
  return <p>© 2024 My Website</p>
}

// Main App uses the components above
function App() {
  return (
    <div>
      <h1>Topic 3: First Component</h1>

      <h2>Using Components</h2>
      <Header />
      <Greeting />
      <Footer />

      <hr />

      <h2>Reuse Components</h2>
      <Greeting />
      <Greeting />
      <Greeting />

      <hr />

      <h2>Component Rules</h2>
      <p>1. Component names start with Capital letter</p>
      <p>2. Components can be reused many times</p>
      <p>3. Components must return one parent element</p>
    </div>
  )
}

export default App
