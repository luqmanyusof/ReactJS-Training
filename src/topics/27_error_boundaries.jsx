// Topic 27: Error Boundaries
// Learn how to catch JavaScript errors in React components

import { Component } from 'react'

// Error Boundary Component (must be class component)
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console or error reporting service
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div style={{ padding: '20px', backgroundColor: '#ffebee', border: '2px solid red' }}>
          <h2>Something went wrong!</h2>
          <p>Error: {this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

// Component that might throw error
function BuggyComponent({ shouldError }) {
  if (shouldError) {
    throw new Error('Crash! This component has a bug.')
  }
  return <p>This component works fine!</p>
}

// Another buggy component
function DivideByZero({ number }) {
  const result = 100 / number
  if (!isFinite(result)) {
    throw new Error('Cannot divide by zero!')
  }
  return <p>100 / {number} = {result}</p>
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Topic 27: Error Boundaries</h1>

      <h2>Example 1: Normal Component (No Error)</h2>
      <ErrorBoundary>
        <BuggyComponent shouldError={false} />
      </ErrorBoundary>

      <hr />

      <h2>Example 2: Component with Error (Caught!)</h2>
      <ErrorBoundary>
        <BuggyComponent shouldError={true} />
      </ErrorBoundary>

      <hr />

      <h2>Example 3: Division Error (Caught!)</h2>
      <ErrorBoundary>
        <DivideByZero number={0} />
      </ErrorBoundary>

      <hr />

      <h2>Example 4: Multiple Components</h2>
      <ErrorBoundary>
        <div>
          <BuggyComponent shouldError={false} />
          <DivideByZero number={5} />
        </div>
      </ErrorBoundary>

      <hr />

      <h2>What are Error Boundaries?</h2>
      <p>✓ React components that catch JavaScript errors</p>
      <p>✓ Catch errors in child component tree</p>
      <p>✓ Display fallback UI instead of crash</p>
      <p>✓ Log error information</p>

      <h2>What Errors are Caught?</h2>
      <p>✓ Errors in render methods</p>
      <p>✓ Errors in lifecycle methods</p>
      <p>✓ Errors in constructors</p>
      <p>✓ Errors in child components</p>

      <h2>What Errors are NOT Caught?</h2>
      <p>✗ Event handlers (use try-catch)</p>
      <p>✗ Async code (setTimeout, promises)</p>
      <p>✗ Server-side rendering</p>
      <p>✗ Errors in error boundary itself</p>

      <h2>Why Use Error Boundaries?</h2>
      <p>✓ Prevent entire app from crashing</p>
      <p>✓ Show user-friendly error messages</p>
      <p>✓ Log errors for debugging</p>
      <p>✓ Better user experience</p>

      <h2>Note</h2>
      <p>⚠️ Must be class component (no functional version yet)</p>
      <p>⚠️ Only catches errors during rendering</p>
      <p>⚠️ Wrap components that might fail</p>

    </div>
  )
}

export default App
