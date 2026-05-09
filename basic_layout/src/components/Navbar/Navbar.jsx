import './Navbar.css'

function Navbar({ setActivePage }) {
    return (
        <div className="navbar">
            <div className="navbar_brand">
                <h1>All in One Calculator</h1>
            </div>
            <div className="navbar_links">
                <a href="#area" onClick={() => setActivePage('area')}>Area</a>
                <a href="#bmi" onClick={() => setActivePage('bmi')}>BMI</a>
                <a href="#converter" onClick={() => setActivePage('converter')}>Converter</a>
            </div>
        </div>
    )
}

export default Navbar