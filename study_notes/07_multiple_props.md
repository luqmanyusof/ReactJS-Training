# Topic 7: Multiple Props

## What is it?
Passing multiple pieces of data to a component using multiple props, including different data types.

## Why Use Multiple Props?

1. **Rich Component Configuration**
   - Pass all needed data in one component call
   - Create flexible, feature-rich components
   - Handle complex UI requirements

2. **Cleaner Code Organization**
   - Each prop has a specific purpose
   - Self-documenting code
   - Easy to understand what component needs

3. **Type Variety**
   - Pass strings, numbers, booleans, objects, arrays
   - Pass functions as callbacks
   - Full JavaScript flexibility

4. **Conditional Rendering**
   - Boolean props to show/hide features
   - `isActive`, `isDisabled`, `showIcon`
   - Toggle component behavior

5. **Clear Component API**
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
// Component with multiple props
function UserCard({ name, email, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  )
}

// Usage - pass all props
<UserCard 
  name="John"
  email="john@test.com"
  age={25}
/>
```

## Important Notes
- All props are **required** in this topic
- Props must be provided when using the component
- Missing props will show `undefined`
- **Next topic** covers default values for optional props

## Destructuring Pattern
```jsx
// ✅ Recommended: Destructure in parameters
function Card({ title, description, price }) {
  return <div>{title} - {description} - ${price}</div>
}

// ❌ Not recommended: Use props object
function Card(props) {
  return <div>{props.title} - {props.description}</div>
}
```
