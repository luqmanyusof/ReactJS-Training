// Topic 25: Lifting State Up
// Learn how to share state between components

import { useState } from 'react'

// Child component that displays temperature
function TemperatureDisplay({ temp, unit }) {
  return (
    <div>
      <h3>Current Temperature</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {temp}° {unit}
      </p>
    </div>
  )
}

// Child component with input
function TemperatureInput({ temp, unit, onTempChange }) {
  return (
    <div>
      <h3>Enter Temperature ({unit})</h3>
      <input 
        type="number" 
        value={temp} 
        onChange={(e) => onTempChange(e.target.value)}
      />
    </div>
  )
}

function App() {
  // State lives in parent component
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(32)

  // When celsius changes, update fahrenheit
  function handleCelsiusChange(value) {
    const c = parseFloat(value) || 0
    setCelsius(c)
    setFahrenheit((c * 9/5) + 32)
  }

  // When fahrenheit changes, update celsius
  function handleFahrenheitChange(value) {
    const f = parseFloat(value) || 0
    setFahrenheit(f)
    setCelsius((f - 32) * 5/9)
  }

  return (
    <div>
      <h1>Topic 25: Lifting State Up</h1>

      <TemperatureInput 
        temp={celsius} 
        unit="Celsius" 
        onTempChange={handleCelsiusChange}
      />

      <TemperatureInput 
        temp={fahrenheit} 
        unit="Fahrenheit" 
        onTempChange={handleFahrenheitChange}
      />

      <TemperatureDisplay temp={celsius} unit="C" />
      <TemperatureDisplay temp={fahrenheit} unit="F" />

      <hr />

      <h2>How It Works</h2>
      <p>1. State is stored in the parent component (App)</p>
      <p>2. Child components receive state as props</p>
      <p>3. Child components call parent functions to update state</p>
      <p>4. Parent updates state, both children re-render</p>

      <h2>Why Lift State Up?</h2>
      <p>✓ Share data between sibling components</p>
      <p>✓ Keep components in sync</p>
      <p>✓ Single source of truth</p>
      <p>✓ Easier to debug and maintain</p>

    </div>
  )
}

export default App
