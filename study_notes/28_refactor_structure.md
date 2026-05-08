# Topic 28: Refactor Structure

## What is it?
Organizing React code into separate files and folders for better maintainability.

## Why Refactor into Structure?

1. **Maintainability**
   - Find code quickly
   - Each file has one purpose
   - Easier debugging

2. **Scalability**
   - Add features without mess
   - Team members know where things go
   - Grows with your app

3. **Reusability**
   - Import components anywhere
   - Share across pages
   - DRY principle

4. **Separation of Concerns**
   - Components: UI pieces
   - Pages: Route views
   - Services: API calls

5. **Team Collaboration**
   - Clear ownership
   - Avoid merge conflicts
   - Parallel development

6. **Testing**
   - Test files next to source
   - Isolated unit tests
   - Clear test organization

7. **Industry Standard**
   - Common patterns
   - New developers understand
   - Professional codebase

## Recommended Structure
```
src/
├── components/        # Reusable UI components
│   ├── Header.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   └── UserList.jsx
│
├── pages/             # Route page components
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   └── DashboardPage.jsx
│
├── services/          # API calls
│   └── api.js
│
├── hooks/             # Custom hooks
│   └── useAuth.js
│
├── utils/             # Helper functions
│   └── formatDate.js
│
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Import/Export Pattern
```jsx
// components/Header.jsx
function Header({ title }) {
  return <h1>{title}</h1>
}
export default Header

// App.jsx
import Header from './components/Header'

function App() {
  return <Header title="My App" />
}
```

## When to Extract
- Component used in multiple places
- File getting too long (>200 lines)
- Distinct responsibility
- Needs its own tests

## Naming Conventions
- Components: PascalCase (`UserCard.jsx`)
- Utilities: camelCase (`formatDate.js`)
- Hooks: start with "use" (`useAuth.js`)
- One component per file
