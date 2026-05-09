# Topic 13: Event Handling

## What is Event Handling?
Responding to user interactions like clicks, typing, hovering, and form submissions.

## Why Handle Events in React?

1. **Interactive Applications**
   - Respond to user actions
   - Create dynamic, engaging UIs
   - Build real applications, not just static pages

2. **Declarative Approach**
   - Attach handlers directly in JSX
   - Clear connection between element and action
   - No `addEventListener` needed

3. **Synthetic Events**
   - React wraps browser events
   - Consistent behavior across browsers
   - Same API everywhere

4. **Access to Event Object**
   - Get details about what happened
   - `event.target.value` for input values
   - `event.preventDefault()` to stop defaults

5. **Function Reference vs Call**
   - Pass function, not function call
   - `onClick={handleClick}` not `onClick={handleClick()}`
   - Control when function executes

6. **Pass Data to Handlers**
   - Use arrow functions: `onClick={() => handleClick(id)}`
   - Dynamic behavior based on item
   - Flexible event handling

7. **Component Encapsulation**
   - Handlers defined in component
   - Access to component's state and props
   - Self-contained logic

## Common Events

| Event | Usage |
|-------|-------|
| onClick | Button clicks, any element clicks |
| onChange | Input, select, textarea changes |
| onSubmit | Form submission |
| onMouseEnter | Mouse hover in |
| onMouseLeave | Mouse hover out |
| onKeyDown | Key pressed |
| onFocus | Element focused |
| onBlur | Element lost focus |

## Syntax
```jsx
// Named handler
function handleClick() {
  alert('Clicked!')
}
<button onClick={handleClick}>Click</button>

// Inline handler
<button onClick={() => alert('Clicked!')}>Click</button>

// With argument
<button onClick={() => deleteItem(item.id)}>Delete</button>

// With event object
function handleChange(event) {
  console.log(event.target.value)
}
<input onChange={handleChange} />
```
