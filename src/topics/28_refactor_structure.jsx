// Topic 28: Refactor Structure
// Learn how to organize code into separate files

// In real projects, put components in separate files:

// components/Header.jsx
function Header({ title }) {
  return <h2>{title}</h2>
}

// components/UserList.jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

// Main App uses components
function App() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ]

  return (
    <div>
      <h1>Topic 28: Refactor Structure</h1>

      <Header title="User List" />
      <UserList users={users} />

    </div>
  )
}

export default App
