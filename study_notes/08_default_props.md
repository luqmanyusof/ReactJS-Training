# Topic 8: Default Props

## What is it?
Setting default values for component props so they work even when props are not provided.

## Why Use Default Props?

1. **Prevent Errors**
   - Avoid "undefined" errors
   - Component works without all props
   - Safer, more robust components

2. **Better Developer Experience**
   - Optional props clearly defined
   - Less props to remember
   - Flexible component usage

3. **Reduce Conditional Logic**
   - No need for `prop || 'default'` everywhere
   - Cleaner component code
   - Defaults handled automatically

4. **Self-Documenting**
   - Shows expected values
   - Clear component API
   - Easier for other developers

## Syntax (Modern Approach)

```jsx
// Default parameters (Recommended)
function Button({ text = 'Click Me', color = 'blue' }) {
  return <button style={{ color }}>{text}</button>
}

// Usage
<Button />                        // Uses defaults
<Button text="Submit" />          // Overrides text only
<Button color="red" />            // Overrides color only
<Button text="Go" color="green" /> // Overrides both
```

## Multiple Defaults

```jsx
function Card({ 
  title = 'Untitled',
  description = 'No description',
  author = 'Anonymous',
  date = new Date().toLocaleDateString()
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>By {author} on {date}</small>
    </div>
  )
}
```

## Common Default Values

```jsx
// String
text = 'Default text'

// Number
count = 0
size = 16

// Boolean
isActive = false
isVisible = true

// Array
items = []

// Object
config = {}

// Function
onClick = () => {}
```

## When to Use Defaults?

**Use defaults when:**
- Prop is optional
- Component should work without it
- There's a sensible default value
- Reduces prop requirements

**Don't use defaults when:**
- Prop is required
- No sensible default exists
- Default might hide bugs

## Patterns

### 1. Optional Styling Props
```jsx
function Button({ 
  size = 'medium',
  variant = 'primary',
  disabled = false 
}) {
  // Component logic
}
```

### 2. Optional Content
```jsx
function Card({ 
  title = 'No Title',
  footer = null,
  children = <p>No content</p>
}) {
  // Component logic
}
```

### 3. Configuration Objects
```jsx
function Chart({ 
  config = {
    width: 400,
    height: 300,
    showLegend: true
  }
}) {
  // Component logic
}
```

## Old Way (Still Works)

```jsx
// Using defaultProps property (class components style)
function Button({ text, color }) {
  return <button style={{ color }}>{text}</button>
}

Button.defaultProps = {
  text: 'Click Me',
  color: 'blue'
}
```

## Best Practices

1. Use default parameters (modern, simpler)
2. Set defaults for optional props only
3. Use sensible, safe default values
4. Document defaults in comments if complex
5. Don't over-use - too many defaults = unclear API

## Common Mistakes

```jsx
// ❌ Bad: Hiding required props with defaults
function User({ id = 0 }) {  // id should be required!
  // ...
}

// ✅ Good: Only optional props have defaults
function User({ id, name = 'Anonymous' }) {
  if (!id) throw new Error('id is required')
  // ...
}
```
