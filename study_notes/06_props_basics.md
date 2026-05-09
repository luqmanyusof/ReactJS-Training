# Topic 6: Props Basics

## What are Props?
Props (properties) are how you pass data from a parent component to a child component.

## Why Use Props?

1. **Dynamic Components**
   - Same component, different data
   - Customize component behavior from outside
   - No hardcoded values inside components

2. **Data Flow Control**
   - One-way data flow (parent → child)
   - Easy to track where data comes from
   - Predictable and debuggable

3. **Component Reusability**
   - Create generic components that work with any data
   - Same Button component for "Submit", "Cancel", "Delete"
   - Write less code, do more

4. **Separation of Data and UI**
   - Component defines HOW to display
   - Props define WHAT to display
   - Clear responsibilities

5. **Component Communication**
   - Parent tells child what to show
   - Pass callbacks for child-to-parent communication
   - Build interactive features

6. **Type Safety (with TypeScript)**
   - Define expected props
   - Catch errors during development
   - Better documentation

7. **Default Values**
   - Set fallback values for optional props
   - Components work even without all props
   - More robust code

## Syntax
```jsx
// Pass props
<Greeting name="Alice" age={25} />

// Receive props (method 1)
function Greeting(props) {
  return <p>Hello, {props.name}</p>
}

// Receive props (method 2 - destructuring)
function Greeting({ name, age }) {
  return <p>Hello, {name}, you are {age}</p>
}
```

## Props vs Variables
| Props | Variables |
|-------|-----------|
| Passed from parent | Defined inside component |
| Read-only | Can be modified |
| Make component reusable | For internal logic |
