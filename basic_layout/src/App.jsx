import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Area from './pages/Area/Area'
import BMI from './pages/BMI/BMI'
import Converter from './pages/Converter/Converter'

function App() {
 const [activePage, setActivePage] = useState('area');

 return (
  <>
  <Navbar setActivePage={setActivePage} />
  <div className="app-container">
    <div className="main-layout">
      <div className="content-area">
        {activePage === 'area' && <Area />}
        {activePage === 'bmi' && <BMI />}
        {activePage === 'converter' && <Converter />}
        
      </div>
    </div>
  </div>
  <Footer />
  </>
 )
}

export default App
