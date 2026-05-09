# Topic 17: Basic Styling

## What is it?
Different methods to style React components: external CSS, inline styles, and CSS classes.

## Why Learn Multiple Styling Methods?

1. **External CSS (Recommended)**
   - Separation of concerns
   - Reusable across components
   - Full CSS features (hover, media queries)
   - Easier for designers to work with

2. **Inline Styles**
   - Quick one-off styles
   - Dynamic values from state
   - No CSS file needed
   - Good for computed styles

3. **className in React**
   - Same as HTML `class`
   - `class` is reserved in JavaScript
   - Can combine multiple: `className="btn btn-primary"`

4. **CSS Organization**
   - One CSS file per component
   - Or global styles file
   - Import where needed

5. **Dynamic Classes**
   - Template literals for conditional classes
   - `className={\`btn \${isActive ? 'active' : ''}\`}`
   - React state controls styling

6. **Consistency**
   - Same styles throughout app
   - Define once, use everywhere
   - Easier maintenance

7. **Performance**
   - External CSS cached by browser
   - Inline styles recalculated each render
   - CSS classes are more efficient

## Syntax Differences

| CSS | Inline (React) |
|-----|----------------|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `margin-top` | `marginTop` |
| `class="btn"` | `className="btn"` |
| `20px` | `'20px'` or `20` |

## Methods

### 1. External CSS
```css
/* styles.css */
.btn { padding: 10px; }
.btn-blue { background: blue; }
```
```jsx
import './styles.css'
<button className="btn btn-blue">Click</button>
```

### 2. Inline Styles
```jsx
<p style={{ color: 'red', fontSize: '18px' }}>
  Red text
</p>
```

### 3. Style Object
```jsx
const buttonStyle = {
  padding: '10px',
  backgroundColor: 'blue',
  color: 'white'
}
<button style={buttonStyle}>Click</button>
```

## When to Use What
- **External CSS**: Most styles, reusable classes
- **Inline**: Dynamic values, one-time styles
- **CSS Modules**: Scoped styles (advanced)
