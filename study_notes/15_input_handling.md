# Topic 15: Input Handling

## What is Controlled Input?
An input whose value is controlled by React state, not by the DOM.

## Why Use Controlled Inputs?

1. **Single Source of Truth**
   - State holds the input value
   - UI always reflects current state
   - No mismatch between DOM and React

2. **Real-Time Access**
   - Access input value anytime via state
   - No need to query DOM
   - Use value for validation, display, etc.

3. **Instant Validation**
   - Validate as user types
   - Show errors immediately
   - Better user experience

4. **Data Transformation**
   - Format input on the fly
   - Uppercase, trim, limit characters
   - Control exactly what gets stored

5. **Form State Management**
   - Track all form inputs in state
   - Easy to submit all data
   - Reset form by resetting state

6. **Conditional Logic**
   - Enable/disable based on input
   - Show/hide related fields
   - Dynamic form behavior

7. **Testing**
   - Set state to test different values
   - No DOM manipulation in tests
   - Predictable behavior

## Pattern
```jsx
const [value, setValue] = useState('')

<input
  value={value}                          // Display state
  onChange={(e) => setValue(e.target.value)}  // Update state
/>
```

## Step by Step

1. **Create state** for the input value
2. **Bind `value`** prop to state
3. **Handle `onChange`** to update state

```jsx
import { useState } from 'react'

function Form() {
  const [email, setEmail] = useState('')

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <p>You typed: {email}</p>
    </div>
  )
}
```

## Controlled vs Uncontrolled

| Controlled | Uncontrolled |
|------------|--------------|
| Value in React state | Value in DOM |
| onChange updates state | ref to access value |
| React controls input | DOM controls input |
| Recommended approach | Simpler for basic cases |
