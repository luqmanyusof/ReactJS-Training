# React Course - Complete Training (32 Topics)

Learn React from absolute basics to production deployment with hands-on examples.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) - All 32 topics display on one scrollable page.

## Course Topics (32 Total)

### Foundation (1-8): Core React Concepts
1. **Project Setup** - Vite, React basics, JSX introduction
2. **JSX and Variables** - Embedding JavaScript in JSX
3. **First Component** - Creating functional components
4. **React Fragments** - Grouping elements without extra DOM nodes
5. **Component Composition** - Nesting components, children prop
6. **Props Basics** - Passing data to components
7. **Multiple Props** - Using multiple props with different types
8. **Default Props** - Setting default values for optional props

### Lists & Logic (9-11): Data Display
9. **List Rendering** - Using map() to display arrays
10. **Key in List** - Understanding keys in React lists
11. **Conditional Rendering** - Show/hide content with logic

### Interaction (12-18): User Input & State
12. **useState Basics** - Managing state in functional components
13. **Event Handling** - Responding to user interactions
14. **Simple Form** - Basic form submission with preventDefault
15. **Input Handling** - Controlled text inputs
16. **Form Elements** - Dropdown, radio, checkbox, number, range
17. **Multiple Inputs** - Handling multiple form fields
18. **Form Submit** - Complete forms with object state

### Styling (19-20): Appearance
19. **Basic Styling** - External CSS, inline styles
20. **CSS Modules** - Scoped CSS for components

### Hooks (21-24): Advanced React Features
21. **useRef Hook** - DOM access and persistent values
22. **useEffect Basics** - Side effects and lifecycle
23. **Fetch API** - Getting data from APIs
24. **Loading/Error States** - Handling async states properly

### Advanced Patterns (25-28): Professional Techniques
25. **Lifting State Up** - Sharing state between components
26. **localStorage** - Browser storage for persistence
27. **Custom Hooks** - Reusable stateful logic
28. **Context API** - Global state management

### Production (29-32): Deployment Ready
29. **Error Boundaries** - Catching component errors
30. **React Router** - Navigation simulation
31. **Environment Variables** - Vite env configuration
32. **Deployment** - Netlify, Vercel, GitHub Pages

## Project Structure

```
ReactJS Training/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx                    # Renders all 32 topics
│   └── topics/
│       ├── 01_project_setup.jsx
│       ├── 02_jsx_and_variables.jsx
│       ├── 03_first_component.jsx
│       ├── 04_react_fragments.jsx
│       ├── 05_component_composition.jsx
│       ├── 06_props_basics.jsx
│       ├── 07_multiple_props.jsx
│       ├── 08_default_props.jsx
│       ├── 09_list_rendering.jsx
│       ├── 10_key_in_list.jsx
│       ├── 11_conditional_rendering.jsx
│       ├── 12_usestate_basics.jsx
│       ├── 13_event_handling.jsx
│       ├── 14_simple_form.jsx
│       ├── 15_input_handling.jsx
│       ├── 16_form_elements.jsx
│       ├── 17_multiple_inputs.jsx
│       ├── 18_form_submit.jsx
│       ├── 19_basic_styling.jsx
│       ├── 20_css_modules.jsx
│       ├── 21_useref_hook.jsx
│       ├── 22_useeffect_basics.jsx
│       ├── 23_fetch_api.jsx
│       ├── 24_loading_error_states.jsx
│       ├── 25_lifting_state_up.jsx
│       ├── 26_localStorage.jsx
│       ├── 27_custom_hooks.jsx
│       ├── 28_context_api.jsx
│       ├── 29_error_boundaries.jsx
│       ├── 30_react_router_setup.jsx
│       ├── 31_environment_variables.jsx
│       └── 32_deployment.jsx
└── study_notes/
    ├── 01_project_setup.md
    ├── 02_jsx_and_variables.md
    └── ... (32 markdown files with detailed notes)
```

## Learning Path

**Recommended order:** Follow topics 1-32 sequentially. Each topic builds on previous concepts.

**Key prerequisites:**
- Topic 12 (useState) must come before topics that use state
- Topics 14-18 (Forms) build progressively in complexity
- Topic 22 (useEffect) required before Topic 23 (Fetch API)
- Topics 25-28 (Advanced) require solid understanding of hooks

## Study Notes

Each topic has a detailed markdown file in `study_notes/` covering:
- What the concept is
- Why it's important
- Code examples with explanations
- Common patterns and best practices
- Mistakes to avoid

## Debugging Tips

### Browser Console (F12)

Open DevTools with `F12` or right-click → "Inspect"

```javascript
// Print values to console
console.log("Hello")
console.log("User:", user)
console.log("Age:", age, "Name:", name)

// Print with label
console.log({ user, age, name })  // Shows variable names

// Warning and error
console.warn("This is a warning")
console.error("This is an error")

// Table format for arrays/objects
console.table(users)

// Group related logs
console.group("User Info")
console.log("Name:", name)
console.log("Age:", age)
console.groupEnd()
```

### Terminal Console

```bash
# Start dev server
npm run dev

# If port 5173 is busy, kill it (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Clear npm cache if issues
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `Module not found` | Check import path, case-sensitive |
| `X is not defined` | Variable not declared or wrong scope |
| `Cannot read property of undefined` | Object is null/undefined, check data |
| `Each child should have unique key` | Add `key={item.id}` in map() |
| `Too many re-renders` | Don't call setState in render, use useEffect |
| `White screen` | Check browser console for errors |

### Quick Debug Checklist

1. **Check browser console** (F12) - Red errors?
2. **Check terminal** - Build errors?
3. **Add console.log** - Is data what you expect?
4. **Check spelling** - Variable names, imports
5. **Check brackets** - Missing `}` or `)`?
6. **Save file** - Did you save after changes?
