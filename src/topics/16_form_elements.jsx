// Topic 16: Form Elements
// Learn how to handle different types of form inputs

import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    country: 'usa',
    gender: '',
    subscribe: false,
    age: 18,
    rating: 3
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div>
      <h1>Topic 16: Form Elements</h1>

      <h2>1. Dropdown / Select</h2>
      <label>
        Country: 
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="usa">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="canada">Canada</option>
          <option value="australia">Australia</option>
          <option value="malaysia">Malaysia</option>
        </select>
      </label>
      <p>Selected: {formData.country}</p>

      <hr />

      <h2>2. Radio Buttons</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === 'other'}
          onChange={handleChange}
        />
        Other
      </label>
      <p>Selected: {formData.gender || 'None'}</p>

      <hr />

      <h2>3. Checkbox</h2>
      <label>
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>
      <p>Subscribed: {formData.subscribe ? 'Yes' : 'No'}</p>

      <hr />

      <h2>4. Number Input</h2>
      <label>
        Age: 
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          max="120"
        />
      </label>
      <p>Age: {formData.age}</p>

      <hr />

      <h2>5. Range Slider</h2>
      <label>
        Rating (1-5): 
        <input
          type="range"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
        />
      </label>
      <p>Rating: {formData.rating} / 5</p>

      <hr />

      <h2>All Form Data</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>

      <hr />

      <h2>Key Points</h2>
      <p>✓ Dropdown: Use &lt;select&gt; with value and onChange</p>
      <p>✓ Radio: Same name, different values, checked based on state</p>
      <p>✓ Checkbox: Use checked prop, not value</p>
      <p>✓ Number: type="number" with min/max validation</p>
      <p>✓ Range: type="range" for sliders</p>
      <p>✓ All controlled by state for consistency</p>
    </div>
  )
}

export default App
