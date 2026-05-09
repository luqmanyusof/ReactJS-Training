# Topic 25: Lifting State Up

## What is it?
Moving state from child components to a common parent component so that multiple components can share and synchronize the same data.

## Why Lift State Up?

1. **Share State Between Siblings**
   - Two or more components need the same data
   - Can't pass props directly between siblings
   - Parent acts as middleman

2. **Single Source of Truth**
   - One place stores the data
   - No duplicate or conflicting state
   - Easier to debug and maintain

3. **Keep Components in Sync**
   - When one component updates, others update automatically
   - Changes propagate through parent
   - Consistent UI across components

4. **Controlled Components**
   - Parent controls child behavior
   - Predictable data flow
   - Common React pattern

## How It Works

```jsx
// Parent holds state
function Parent() {
  const [value, setValue] = useState('')
  
  return (
    <>
      <ChildA value={value} onChange={setValue} />
      <ChildB value={value} />
    </>
  )
}

// Child A can update
function ChildA({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />
}

// Child B displays
function ChildB({ value }) {
  return <p>{value}</p>
}
```

## When to Lift State

- Multiple components need the same data
- Components need to stay synchronized
- Parent needs to control child behavior
- Building forms with multiple inputs

## Common Pattern

1. Identify shared state
2. Move state to common parent
3. Pass state down as props
4. Pass update functions down as props
5. Children call functions to update parent state

## Key Concept

**Data flows down, events flow up**
- Props flow from parent to child (data down)
- Callbacks flow from child to parent (events up)
- This is called "unidirectional data flow"
