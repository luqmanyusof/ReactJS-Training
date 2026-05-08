// Topic 19: React Router Setup
// Learn how routing works (simulated without library)

import { useState } from 'react'

function Home() {
  return <p>Home Page - Welcome!</p>
}

function About() {
  return <p>About Page - Learn more about us.</p>
}

function Contact() {
  return <p>Contact Page - Get in touch.</p>
}

function App() {
  const [page, setPage] = useState('home')

  return (
    <div>
      <h1>Topic 19: React Router Setup</h1>

      <h2>Navigation</h2>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('about')}>About</button>
      <button onClick={() => setPage('contact')}>Contact</button>

      <h2>Current Page</h2>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}

    </div>
  )
}

export default App
