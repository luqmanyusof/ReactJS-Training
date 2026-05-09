# Topic 5: Component Composition

## What is it?
Building complex UIs by combining smaller components, using the `children` prop to nest content.

## Why Use Component Composition?

1. **Flexible Components**
   - Same wrapper, different content
   - Card can contain anything
   - Modal can wrap any component

2. **The children Prop**
   - Whatever is between component tags becomes `children`
   - `<Card>This is children</Card>`
   - Most flexible way to compose

3. **Reusable Wrappers**
   - Create layout components once
   - Use everywhere with different content
   - Consistent styling, different data

4. **Avoid Prop Drilling**
   - Pass components, not just data
   - Content decides what to show
   - Cleaner component API

5. **Single Responsibility**
   - Card handles styling only
   - Content handles data display
   - Clear separation of concerns

6. **Customization**
   - Users of component decide content
   - Full flexibility for consumers
   - Not limited to predefined slots

7. **Pattern Reuse**
   - Same patterns across app
   - Consistent look and feel
   - Less code duplication

## The children Prop
```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}  {/* Content goes here */}
    </div>
  )
}

// Usage
<Card title="User">
  <p>John Doe</p>
  <p>john@email.com</p>
  <Button>Edit</Button>
</Card>
```

## Composition vs Props

| Composition | Props |
|-------------|-------|
| Pass JSX/components | Pass data |
| Flexible content | Structured data |
| Consumer controls display | Component controls display |

## Common Use Cases
- **Cards**: Wrap any content in styled container
- **Modals**: Dialog wrapper for any content
- **Layouts**: Page layouts with header, sidebar, content
- **Buttons**: Icon + text combinations
- **Lists**: Generic list wrapper for any items
