# Topic 2: JSX and Variables

## What is JSX?
JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript.

## Why Use JSX?

1. **Familiar HTML-Like Syntax**
   - Easier to visualize UI structure
   - Lower learning curve for developers who know HTML
   - Write markup and logic in the same file

2. **JavaScript Power Inside Markup**
   - Use variables, functions, and expressions with `{}`
   - Dynamic content rendering
   - No need to concatenate strings for dynamic HTML

3. **Type Safety & Error Detection**
   - Catches errors at compile time, not runtime
   - Better IDE support with autocomplete
   - Easier debugging with clear error messages

4. **Prevents Injection Attacks**
   - JSX escapes values by default
   - Protection against XSS (Cross-Site Scripting)
   - Safer than innerHTML

5. **Component-Friendly**
   - Easy to compose components together
   - Self-closing tags for cleaner code
   - Clear visual hierarchy of UI

6. **Conditional & Loop Rendering**
   - Use JavaScript logic directly in markup
   - Map arrays to lists easily
   - Ternary operators for conditional display

## Key Rules
- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- Close all tags: `<img />`, `<br />`, `<input />`
- Use `{}` to insert JavaScript expressions

## Common Patterns
```jsx
// Variables
const name = "John"
<p>Hello, {name}</p>

// Math
<p>Total: {price * quantity}</p>

// Functions
<p>{formatDate(today)}</p>

// Object properties
<p>{user.email}</p>
```
