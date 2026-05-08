# Topic 12: Conditional Rendering

## What is it?
Showing or hiding elements based on conditions - React's way of doing if/else in JSX.

## Why Use Conditional Rendering?

1. **Dynamic User Interfaces**
   - Show different content based on state
   - Login vs logged-in views
   - Loading, error, and success states

2. **User Experience**
   - Display relevant information only
   - Hide features user can't use
   - Responsive to user actions

3. **Permission-Based UI**
   - Show admin features only to admins
   - Hide premium content from free users
   - Role-based interfaces

4. **State-Driven Display**
   - Loading spinners while fetching
   - Error messages when things fail
   - Empty states when no data

5. **Form Validation Feedback**
   - Show errors only when invalid
   - Success messages on submit
   - Real-time feedback

6. **Toggle Features**
   - Expand/collapse sections
   - Show/hide passwords
   - Modal dialogs

7. **Clean Code**
   - No hidden elements in DOM
   - Elements only exist when needed
   - Better performance

## Three Methods

### 1. Ternary Operator (? :)
Show one thing OR another:
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
{count > 0 ? <p>Count: {count}</p> : <p>No items</p>}
```

### 2. Logical AND (&&)
Show only if true:
```jsx
{isLoading && <Spinner />}
{error && <p>Error: {error}</p>}
{items.length > 0 && <List items={items} />}
```

### 3. Early Return
Return different JSX based on condition:
```jsx
function Component({ isLoading }) {
  if (isLoading) return <Spinner />
  return <Content />
}
```

## When to Use What

| Method | Use When |
|--------|----------|
| Ternary `? :` | Choosing between two options |
| AND `&&` | Show/hide single element |
| Early return | Complex conditions, loading states |
