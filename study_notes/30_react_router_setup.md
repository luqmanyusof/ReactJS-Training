# Topic 30: React Router Setup

## What is React Router?
A library for handling navigation between different pages/views in a React application.

## Why Use React Router?

1. **Single Page Application (SPA)**
   - No full page reloads
   - Faster navigation
   - Smooth user experience

2. **URL-Based Navigation**
   - Each page has unique URL
   - Users can bookmark pages
   - Browser back/forward works

3. **Declarative Routing**
   - Define routes in JSX
   - Clear mapping of URL to component
   - Easy to understand structure

4. **Nested Routes**
   - Layouts with sub-pages
   - Shared headers/sidebars
   - Complex app structures

5. **URL Parameters**
   - Dynamic routes: `/users/:id`
   - Pass data via URL
   - Deep linking support

6. **Code Splitting**
   - Load page components on demand
   - Smaller initial bundle
   - Better performance

7. **Industry Standard**
   - Most popular routing solution
   - Large community
   - Well documented

## Key Components

| Component | Purpose |
|-----------|---------|
| `BrowserRouter` | Wraps app, enables routing |
| `Routes` | Container for Route definitions |
| `Route` | Maps path to component |
| `Link` | Navigation without page reload |

## Basic Setup
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Installation
```bash
npm install react-router-dom
```

## Link vs Anchor Tag
- `<Link>`: SPA navigation, no reload
- `<a href>`: Full page reload, loses state
- Always use `<Link>` for internal navigation
