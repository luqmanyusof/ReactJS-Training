# Topic 18: CSS Modules

## What is it?
A CSS file where class names are scoped locally by default, preventing global namespace pollution and style conflicts.

## Why Use CSS Modules?

1. **Scoped Styles**
   - Class names scoped to component
   - No global namespace pollution
   - No accidental style overrides

2. **Prevent Conflicts**
   - Multiple `.button` classes won't conflict
   - Each component's styles isolated
   - Safe to use common class names

3. **Component Modularity**
   - CSS lives with component
   - Easy to find and modify
   - Self-contained components

4. **Automatic Unique Names**
   - Build tool generates unique class names
   - Example: `.button` becomes `.Card_button__a3f2c`
   - You don't manage uniqueness

5. **Dead Code Elimination**
   - Unused styles can be removed
   - Better build optimization
   - Smaller bundle size

6. **Better Maintenance**
   - Know which styles affect which components
   - Refactor without breaking other parts
   - Easier to delete old code

## How to Use

### Step 1: Create CSS Module File
```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}

.primary {
  background-color: green;
}
```

### Step 2: Import in Component
```jsx
import styles from './Button.module.css'

function Button() {
  return <button className={styles.button}>Click</button>
}
```

### Step 3: Use Classes
```jsx
// Single class
<div className={styles.card}>

// Multiple classes (template literal)
<div className={`${styles.card} ${styles.active}`}>

// Multiple classes (array join)
<div className={[styles.card, styles.active].join(' ')}>

// Conditional class
<div className={active ? styles.active : styles.inactive}>
```

## Naming Convention

**File must end with `.module.css`**
- `Button.module.css` ✅
- `Card.module.css` ✅
- `styles.module.css` ✅
- `Button.css` ❌ (not a module)

## How It Works

```css
/* You write: */
.button { color: blue; }
```

```html
<!-- Browser sees: -->
<button class="Button_button__2x3f1">Click</button>

<style>
.Button_button__2x3f1 { color: blue; }
</style>
```

## Regular CSS vs CSS Modules

| Feature | Regular CSS | CSS Modules |
|---------|-------------|-------------|
| Scope | Global | Local |
| Conflicts | Possible | Prevented |
| Class names | As written | Auto-generated |
| Reusability | Must be careful | Easy |
| Maintenance | Harder | Easier |

## Example Comparison

### Regular CSS (Problems)
```css
/* Button.css */
.button { color: blue; }

/* Card.css */
.button { color: red; }  /* Conflicts with Button.css! */
```

### CSS Modules (No Problems)
```css
/* Button.module.css */
.button { color: blue; }

/* Card.module.css */
.button { color: red; }  /* No conflict! Scoped to Card */
```

## Composing Styles

```css
/* styles.module.css */
.base {
  padding: 10px;
  border-radius: 5px;
}

.primary {
  composes: base;
  background-color: blue;
}

.secondary {
  composes: base;
  background-color: gray;
}
```

## Global Styles

```css
/* Sometimes you need global styles */
:global(.global-class) {
  color: red;
}

/* Or wrap multiple */
:global {
  .reset { margin: 0; }
  .clearfix { clear: both; }
}
```

## Dynamic Class Names

```jsx
function Card({ type }) {
  return (
    <div className={styles[type]}>
      {/* If type="primary", uses styles.primary */}
    </div>
  )
}
```

## Best Practices

1. **Use descriptive class names**
   - `.submitButton` better than `.btn1`
   - No need for prefixes like `card-title`

2. **Co-locate CSS with component**
   ```
   Card/
     Card.jsx
     Card.module.css
   ```

3. **Use composition over duplication**
   - Compose common styles
   - DRY principle

4. **Keep specificity low**
   - No deep nesting needed
   - Scoping handles uniqueness

5. **Combine with CSS variables**
   ```css
   :root {
     --primary-color: blue;
   }
   
   .button {
     background: var(--primary-color);
   }
   ```

## Common Patterns

```jsx
// Conditional classes
const buttonClass = `
  ${styles.button}
  ${isPrimary && styles.primary}
  ${isDisabled && styles.disabled}
`.trim()

// With clsx/classnames library
import clsx from 'clsx'

const buttonClass = clsx(
  styles.button,
  isPrimary && styles.primary,
  isDisabled && styles.disabled
)
```

## When to Use

**Use CSS Modules:**
- Component-specific styles
- Want scoped CSS
- Medium to large projects
- Team collaboration

**Use regular CSS:**
- Global styles (reset, fonts)
- Very small projects
- Need dynamic theming
- Simple single-page sites
