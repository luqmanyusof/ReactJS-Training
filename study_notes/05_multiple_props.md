# Topic 5: Multiple Props

## What is it?
Passing multiple pieces of data to a component using multiple props.

## Why Use Multiple Props?

1. **Rich Component Configuration**
   - Pass all needed data in one component call
   - Create flexible, feature-rich components
   - Handle complex UI requirements

2. **Cleaner Code Organization**
   - Each prop has a specific purpose
   - Self-documenting code
   - Easy to understand what component needs

3. **Default Values**
   - Set defaults for optional props
   - `{ text = "Click", color = "blue" }`
   - Components work with minimal props

4. **Type Variety**
   - Pass strings, numbers, booleans, objects, arrays
   - Pass functions as callbacks
   - Full JavaScript flexibility

5. **Conditional Rendering**
   - Boolean props to show/hide features
   - `isActive`, `isDisabled`, `showIcon`
   - Toggle component behavior

6. **Spread Operator for Objects**
   - Pass entire object as props: `{...user}`
   - Less typing for many props
   - Easy data forwarding

7. **Clear Component API**
   - Props define component's interface
   - Easy to see what component accepts
   - Better developer experience

## Prop Types

| Type | Example |
|------|---------|
| String | `name="John"` |
| Number | `age={25}` |
| Boolean | `isActive={true}` |
| Object | `user={{ name: "John" }}` |
| Array | `items={[1, 2, 3]}` |
| Function | `onClick={handleClick}` |

## Example
```jsx
// Multiple props
<UserCard 
  name="John"
  email="john@test.com"
  age={25}
  isActive={true}
/>

// With defaults
function Button({ text = "Click", color = "blue" }) {
  return <button style={{ backgroundColor: color }}>{text}</button>
}

<Button />  // Uses defaults
<Button text="Submit" color="green" />  // Custom values
```
