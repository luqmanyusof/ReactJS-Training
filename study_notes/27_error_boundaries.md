# Topic 27: Error Boundaries

## What is it?
React components that catch JavaScript errors anywhere in their child component tree, log errors, and display a fallback UI instead of crashing the entire app.

## Why Use Error Boundaries?

1. **Prevent App Crashes**
   - One broken component won't crash entire app
   - Isolate errors to specific parts
   - Rest of app continues working

2. **Better User Experience**
   - Show friendly error message
   - Users can continue using app
   - Graceful degradation

3. **Error Logging**
   - Catch and log errors
   - Send to error reporting service
   - Debug production issues

4. **Production Safety**
   - Handle unexpected errors
   - Fallback UI for broken features
   - Professional error handling

## How to Create

**Must be a Class Component** (no functional version yet)

```jsx
import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error
    console.error('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
```

## How to Use

```jsx
// Wrap components that might error
function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  )
}
```

## What Errors are Caught?

✅ **Caught by Error Boundaries:**
- Errors during rendering
- Errors in lifecycle methods
- Errors in constructors
- Errors in child components

❌ **NOT Caught:**
- Event handlers (use try-catch)
- Asynchronous code (setTimeout, promises)
- Server-side rendering
- Errors in error boundary itself

## Handling Event Errors

```jsx
// Error boundaries don't catch event errors
// Use try-catch instead
function Button() {
  function handleClick() {
    try {
      // Code that might error
      riskyOperation()
    } catch (error) {
      console.error('Button error:', error)
    }
  }
  
  return <button onClick={handleClick}>Click</button>
}
```

## Multiple Error Boundaries

```jsx
function App() {
  return (
    <div>
      {/* Separate boundaries for different sections */}
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
    </div>
  )
}
```

## Better Fallback UI

```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#ffebee' }}>
          <h2>⚠️ Something went wrong</h2>
          <p>{this.state.error.message}</p>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
```

## Error Logging Example

```jsx
componentDidCatch(error, errorInfo) {
  // Log to error reporting service
  logErrorToService(error, errorInfo)
  
  // Or send to backend
  fetch('/api/log-error', {
    method: 'POST',
    body: JSON.stringify({ error: error.toString(), errorInfo })
  })
}
```

## Where to Place Error Boundaries?

1. **Top-level** - catch all errors
```jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

2. **Feature-level** - isolate features
```jsx
<ErrorBoundary>
  <ShoppingCart />
</ErrorBoundary>
```

3. **Component-level** - protect critical parts
```jsx
<ErrorBoundary>
  <PaymentForm />
</ErrorBoundary>
```

## Best Practices

1. Place boundaries at strategic points
2. Don't overuse - add where errors likely
3. Provide helpful error messages
4. Log errors for debugging
5. Offer recovery actions (retry, reload)
6. Test error boundaries in development

## Common Pattern

```jsx
// Reusable error boundary with custom fallback
class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback from props or default
      return this.props.fallback || <h1>Error!</h1>
    }
    return this.props.children
  }
}

// Usage with custom fallback
<ErrorBoundary fallback={<CustomErrorMessage />}>
  <Component />
</ErrorBoundary>
```

## Limitations

- Must be class component (no hooks version)
- Only catches render-phase errors
- Doesn't catch event handler errors
- Doesn't catch async errors
- Can't catch its own errors

## Future: React Error Boundary Hook?

Currently no official hook, but libraries exist:
- react-error-boundary (popular library)
- Provides hook-based solution
