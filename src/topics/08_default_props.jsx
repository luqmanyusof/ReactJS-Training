// Topic 8: Default Props
// Learn how to set default values and validate props

// Component with default props
function Button({ text, color, size, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: color,
        fontSize: size,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  )
}

// Set default props (Method 1: Default parameters)
function Card({ title = 'No Title', description = 'No description', badge = '' }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      <h3>{title} {badge && <span style={{ color: 'red' }}>{badge}</span>}</h3>
      <p>{description}</p>
    </div>
  )
}

// User profile with all default props
function UserProfile({ 
  name = 'Guest', 
  age = 18, 
  email = 'not provided',
  isActive = false 
}) {
  return (
    <div style={{ border: '2px solid #333', padding: '10px', margin: '10px' }}>
      <h4>User Profile</h4>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Topic 8: Default Props</h1>

      <h2>Example 1: Buttons with Defaults</h2>
      <Button 
        text="Click Me" 
        color="blue" 
        size="16px" 
        onClick={() => alert('Clicked!')} 
      />
      <br /><br />
      <Button 
        text="Submit" 
        color="green" 
        size="18px" 
        onClick={() => alert('Submitted!')} 
      />

      <hr />

      <h2>Example 2: Cards with Default Props</h2>
      
      <h3>All Props Provided</h3>
      <Card 
        title="React Tutorial" 
        description="Learn React from basics to advanced" 
        badge="NEW"
      />

      <h3>Missing Description (Uses Default)</h3>
      <Card title="JavaScript Guide" />

      <h3>Missing All Props (All Defaults)</h3>
      <Card />

      <hr />

      <h2>Example 3: User Profiles</h2>
      
      <h3>Full Profile</h3>
      <UserProfile 
        name="Alice" 
        age={25} 
        email="alice@example.com" 
        isActive={true}
      />

      <h3>Partial Profile (Some Defaults)</h3>
      <UserProfile name="Bob" age={30} />

      <h3>Guest Profile (All Defaults)</h3>
      <UserProfile />

      <hr />

      <h2>How to Set Default Props</h2>
      <pre>{`// Method 1: Default parameters (Recommended)
function Button({ text = 'Click', color = 'blue' }) {
  return <button style={{ color }}>{text}</button>
}

// Method 2: Destructuring with defaults
function Card({ title, description = 'No description' }) {
  return <div>{title} - {description}</div>
}`}</pre>

      <h2>Benefits</h2>
      <p>✓ Prevent undefined errors</p>
      <p>✓ Components work without all props</p>
      <p>✓ Less conditional checking needed</p>
      <p>✓ Better component reusability</p>
      <p>✓ Clear expected values</p>

    </div>
  )
}

export default App
