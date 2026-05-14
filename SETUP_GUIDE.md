# Material UI Project Setup Guide

## Prerequisites
- Node.js installed on your system

## Step 1: Create Vite + React Project
```bash
npm create vite@latest my-material-app -- --template react
ctrl + c to exit
cd my-material-app
```

## Step 2: Install Dependencies
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install react-router-dom
npm install @fontsource/roboto
```

## Step 3: Project Structure
Create the following folder structure:
```
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx
└── main.jsx
```

## Step 4: Update main.jsx
Add CssBaseline and Roboto font imports:
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
)
```

## Step 5: Create Component Files
Create minimal versions of:
- `components/Navbar.jsx` - AppBar with navigation links using React Router
- `components/Footer.jsx` - Footer with copyright info
- `pages/Home.jsx`, `pages/About.jsx`, `pages/Contact.jsx` - Page components

## Step 6: Setup App.jsx with Router
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
```

## Step 7: Run Development Server
```bash
npm run dev
```

## Summary
This setup includes:
- Vite + React
- Material UI (MUI) with icons
- React Router for navigation
- Roboto font
- Basic layout with Navbar, Footer, and multiple pages
