// Topic 2: JSX and Variables
// Learn how to use JavaScript variables and functions inside JSX

function App() {
  // Variables
  const name = "Student"
  const age = 25
  const year = 2024

  // Object
  const user = { firstName: 'John', lastName: 'Doe' }

  // Array
  const colors = ['red', 'green', 'blue']

  // Function
  function add(a, b) {
    return a + b
  }

  // Arrow function
  const multiply = (a, b) => a * b

  // Spread operator for objects
  const userWithAge = { ...user, age: 30 }

  // Spread operator for arrays
  const moreColors = [...colors, 'yellow', 'purple']

  return (
    <div>
      <h1>Topic 2: JSX and Variables</h1>

      <h2>Display Variables</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Year: {year}</p>

      <h2>Math in JSX</h2>
      <p>Age next year: {age + 1}</p>
      <p>5 + 3 = {5 + 3}</p>

      <h2>Object Properties</h2>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>

      <h2>Array</h2>
      <p>Number of colors: {colors.length}</p>
      <p>First color: {colors[0]}</p>

      <h2>Call Functions</h2>
      <p>add(5, 3) = {add(5, 3)}</p>
      <p>multiply(4, 7) = {multiply(4, 7)}</p>

      <h2>Spread Operator (...) - Preview</h2>
      <p>Original user: John Doe</p>
      <p>With age added: {userWithAge.firstName} {userWithAge.lastName}, age {userWithAge.age}</p>
      <p>Original colors: {colors.length}</p>
      <p>More colors: {moreColors.length} - {moreColors.join(', ')}</p>
      <p>The ... copies all properties/items. You'll use this a lot in Topic 9 and 13!</p>

      <hr />

      <h2>JSX Rules</h2>
      <p>1. Use curly braces to show JavaScript: {'{variable}'}</p>
      <p>2. Use className instead of class</p>
      <p>3. Use htmlFor instead of for</p>
      <p>4. Close all tags: img, br, input need /</p>
    </div>
  )
}

export default App
