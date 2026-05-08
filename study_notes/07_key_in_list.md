# Topic 7: Key in List

## What is the key Prop?
A special prop that helps React identify which list items have changed, been added, or removed.

## Why Use Keys?

1. **Performance Optimization**
   - React uses keys to minimize DOM updates
   - Only re-renders items that actually changed
   - Faster UI updates

2. **Correct State Preservation**
   - React tracks each item's state by its key
   - Prevents bugs when list order changes
   - Input values, checkboxes stay with correct items

3. **Avoiding UI Bugs**
   - Without keys, React may reuse wrong elements
   - Animations may break
   - Form inputs may show wrong data

4. **Efficient Reconciliation**
   - React's diffing algorithm needs keys
   - Compares old and new lists efficiently
   - Determines minimum changes needed

5. **Stable Identity**
   - Key identifies item across re-renders
   - Item maintains its identity even if position changes
   - Essential for drag-and-drop, sorting

6. **Warning Prevention**
   - React shows warning without keys
   - Clean console, better debugging
   - Following React best practices

## Key Rules

| Rule | Explanation |
|------|-------------|
| Unique among siblings | Keys only need to be unique within the same list |
| Stable | Don't generate random keys each render |
| Not index (for dynamic lists) | Index can cause bugs when items reorder |
| Use data ID | Best practice: use `id` from your data |

## Good vs Bad Examples
```jsx
// GOOD: Using unique ID
{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}

// OKAY: Index for static lists only
{['Red', 'Blue', 'Green'].map((color, index) => (
  <li key={index}>{color}</li>
))}

// BAD: Random key - creates new DOM every render
{users.map(user => (
  <li key={Math.random()}>{user.name}</li>
))}
```

## When Index is Okay
- List is static (never changes)
- Items never reorder
- Items never get added/removed
