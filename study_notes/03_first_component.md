# Topic 3: First Component

## What is a Component?
A component is a reusable piece of UI - a JavaScript function that returns JSX.

## Why Use Components?

1. **Reusability**
   - Write once, use many times
   - Consistent UI across the application
   - Reduce code duplication

2. **Maintainability**
   - Each component has single responsibility
   - Easy to find and fix bugs
   - Changes in one place update everywhere

3. **Separation of Concerns**
   - Break complex UI into smaller pieces
   - Each component handles its own logic
   - Easier to understand and test

4. **Team Collaboration**
   - Different developers can work on different components
   - Clear boundaries between parts of the app
   - Easier code reviews

5. **Scalability**
   - Add new features without breaking existing code
   - Compose small components into larger ones
   - Build complex UIs from simple building blocks

6. **Encapsulation**
   - Component's internal logic is hidden
   - Only expose what's needed through props
   - Prevents accidental side effects

7. **Testing**
   - Test each component in isolation
   - Easier to write unit tests
   - More reliable application

## Component Rules
- Name must start with Capital letter: `Header`, not `header`
- Must return ONE parent element (or use Fragment `<>`)
- Can be reused multiple times
- Can contain other components

## Example
```jsx
// Define component
function Greeting() {
  return <h1>Hello World</h1>
}

// Use component
<Greeting />
<Greeting />
<Greeting />
```
