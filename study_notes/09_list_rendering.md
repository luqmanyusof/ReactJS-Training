# Topic 9: List Rendering

## What is it?
Using JavaScript's `map()` function to render arrays of data as lists in JSX.

## Why Use map() for Lists?

1. **Dynamic Data Display**
   - Render any number of items automatically
   - Works with data from APIs
   - No manual HTML for each item

2. **DRY Principle (Don't Repeat Yourself)**
   - Write list item template once
   - Apply to all items in array
   - Less code, fewer bugs

3. **Automatic Updates**
   - When array changes, UI updates
   - Add/remove items reflected immediately
   - React handles re-rendering

4. **Clean, Readable Code**
   - Declarative approach
   - Easy to understand what's being rendered
   - Consistent pattern across projects

5. **Works with Any Data**
   - Arrays of strings
   - Arrays of objects
   - Nested arrays

6. **Transformation Power**
   - Transform data while mapping
   - Filter and map together
   - Format data for display

7. **Component Composition**
   - Map to custom components
   - Each item becomes a component instance
   - Full React features per item

## Syntax
```jsx
// Simple array
const fruits = ['Apple', 'Banana', 'Orange']

{fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
))}

// Array of objects
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
]

{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}
```

## Common Mistakes
- Forgetting to add `key` prop
- Using index as key for dynamic lists
- Not returning JSX from map callback

## Best Practice
Always use a unique identifier as `key`, preferably `id` from your data.
