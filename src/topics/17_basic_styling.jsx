// Topic 17: Basic Styling
// Learn different ways to style React components

import './17_basic_styling.css'

function App() {
  return (
    <div>
      <h1>Topic 17: Basic Styling</h1>

      <h2>1. External CSS (Recommended)</h2>
      <p>Create a .css file and import it.</p>
      <p>Live example:</p>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-success">Success</button>

      <h2>2. Inline Styles</h2>
      <p>Style directly on element (use camelCase):</p>
      <p style={{ color: 'red', fontSize: '18px' }}>Red text (inline)</p>

      <h2>3. Multiple Classes</h2>
      <p>Use className with space-separated classes.</p>

      <hr />

      <h2>CSS vs Inline Differences</h2>
      <p>CSS: background-color → Inline: backgroundColor</p>
      <p>CSS: font-size → Inline: fontSize</p>
      <p>CSS: class="btn" → React: className="btn"</p>
      <p>CSS: 20px → Inline: '20px' or 20</p>
    </div>
  )
}

export default App
