# React Course - Unified Project

## One Project, All 30 Topics, One node_modules!

This unified structure keeps all topics in a single project with shared dependencies.
**Total size: ~200MB** instead of 6-9GB!

## Quick Start

```bash
cd course-unified
npm install
npm run dev
```

## How to Switch Topics

Open `src/App.jsx` and change line 7:

```jsx
const CURRENT_TOPIC = 1  // Change to any number 1-30
```

Save the file and the browser will auto-refresh to show that topic.

## Project Structure

```
course-unified/
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx              # Topic selector
    └── topics/
        ├── 01_project_setup.jsx
        ├── 02_jsx_and_variables.jsx
        ├── 03_first_component.jsx
        ├── 04_props_basics.jsx
        ├── 05_multiple_props.jsx
        ├── 06_list_rendering.jsx
        ├── 07_key_in_list.jsx
        ├── 08_event_handling.jsx
        ├── 09_usestate_basics.jsx
        ├── 10_input_handling.jsx
        ├── 11_multiple_inputs.jsx
        ├── 12_conditional_rendering.jsx
        ├── 13_form_submit.jsx
        ├── 14_component_composition.jsx
        ├── 15_basic_styling.jsx
        ├── 16_useeffect_basics.jsx
        ├── 17_fetch_api.jsx
        ├── 18_loading_error_states.jsx
        ├── 19_react_router_setup.jsx
        ├── 20_navigation.jsx
        ├── 21_login_ui.jsx
        ├── 22_login_logic.jsx
        ├── 23_protected_route.jsx
        ├── 24_crud_list.jsx
        ├── 25_crud_create.jsx
        ├── 26_crud_update.jsx
        ├── 27_crud_delete.jsx
        ├── 28_refactor_structure.jsx
        ├── 29_api_layer.jsx
        └── 30_final_integration.jsx
```

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
