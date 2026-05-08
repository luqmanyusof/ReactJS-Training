// Topic 4: Props Basics
// Learn how to pass data to components using props

// Method 1: Use props object
function Greeting(props) {
  return <p>Hello, {props.name}!</p>
}

// Method 2: Destructure props (cleaner)
function Welcome({ name, age }) {
  return <p>{name} is {age} years old</p>
}

function App() {
  return (
    <div>
      <h1>Topic 4: Props Basics</h1>

      <h2>Pass data to component</h2>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />

      <h2>Multiple props</h2>
      <Welcome name="John" age={25} />
      <Welcome name="Jane" age={30} />

    </div>
  )
}

export default App
