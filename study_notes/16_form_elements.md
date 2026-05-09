# Topic 16: Form Elements

## What is it?
Working with different HTML form input types in React: dropdown (select), radio buttons, checkboxes, number inputs, and range sliders.

## Why Learn Different Form Elements?

1. **Rich User Input**
   - Collect different types of data
   - Better user experience
   - Appropriate input for each data type
   - Professional forms

2. **Data Validation**
   - Number inputs prevent non-numeric values
   - Radio ensures single selection
   - Checkbox for boolean choices
   - Range for bounded values

3. **Controlled Components**
   - All inputs controlled by React state
   - Single source of truth
   - Easy to validate and submit
   - Consistent behavior

## Form Element Types

### 1. Dropdown / Select

**Purpose:** Choose one option from many

```jsx
const [country, setCountry] = useState('usa')

<select value={country} onChange={(e) => setCountry(e.target.value)}>
  <option value="usa">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="canada">Canada</option>
</select>
```

**Key Points:**
- Use `value` prop (not `selected`)
- onChange gets selected value
- Default value in useState

### 2. Radio Buttons

**Purpose:** Choose one option from a group

```jsx
const [gender, setGender] = useState('male')

<label>
  <input
    type="radio"
    name="gender"
    value="male"
    checked={gender === 'male'}
    onChange={(e) => setGender(e.target.value)}
  />
  Male
</label>
<label>
  <input
    type="radio"
    name="gender"
    value="female"
    checked={gender === 'female'}
    onChange={(e) => setGender(e.target.value)}
  />
  Female
</label>
```

**Key Points:**
- Same `name` for all radios in group
- Different `value` for each option
- Use `checked` prop (compares value to state)
- Only one can be selected at a time

### 3. Checkbox

**Purpose:** Toggle a boolean value (true/false)

```jsx
const [subscribe, setSubscribe] = useState(false)

<input
  type="checkbox"
  checked={subscribe}
  onChange={(e) => setSubscribe(e.target.checked)}
/>
```

**Key Points:**
- Use `checked` prop (not `value`)
- onChange uses `e.target.checked` (boolean)
- State is true/false

### 4. Number Input

**Purpose:** Numeric input with validation

```jsx
const [age, setAge] = useState(18)

<input
  type="number"
  value={age}
  onChange={(e) => setAge(e.target.value)}
  min="1"
  max="120"
/>
```

**Key Points:**
- `type="number"` shows number keyboard on mobile
- `min` and `max` for validation
- Still returns string from `e.target.value` (convert if needed)
- Prevents non-numeric characters

### 5. Range Slider

**Purpose:** Select value from a range

```jsx
const [volume, setVolume] = useState(50)

<input
  type="range"
  value={volume}
  onChange={(e) => setVolume(e.target.value)}
  min="0"
  max="100"
/>
```

**Key Points:**
- Visual slider interface
- `min`, `max`, and `step` attributes
- Returns string (convert if needed)
- Good for bounded numeric values

## Handling Multiple Form Elements

Use object state with a single handler:

```jsx
const [formData, setFormData] = useState({
  country: 'usa',
  gender: '',
  subscribe: false,
  age: 18
})

function handleChange(e) {
  const { name, value, type, checked } = e.target
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value
  })
}

// Use on all inputs
<select name="country" value={formData.country} onChange={handleChange}>
<input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
<input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
```

## Common Patterns

### Dropdown with Dynamic Options

```jsx
const countries = ['USA', 'UK', 'Canada']

<select value={country} onChange={(e) => setCountry(e.target.value)}>
  {countries.map(c => (
    <option key={c} value={c.toLowerCase()}>{c}</option>
  ))}
</select>
```

### Multiple Checkboxes

```jsx
const [interests, setInterests] = useState({
  sports: false,
  music: true,
  reading: false
})

function handleCheckbox(e) {
  setInterests({
    ...interests,
    [e.target.name]: e.target.checked
  })
}

<input type="checkbox" name="sports" checked={interests.sports} onChange={handleCheckbox} />
<input type="checkbox" name="music" checked={interests.music} onChange={handleCheckbox} />
```

## Best Practices

1. **Always Use Controlled Components**
   - Set `value` or `checked` prop
   - Connect to state
   - Handle onChange

2. **Appropriate Input Types**
   - Dropdown: Many options
   - Radio: Few options (2-5)
   - Checkbox: Yes/No or multiple selections
   - Number: Numeric values
   - Range: Visual selection

3. **Add Labels**
   - Better accessibility
   - Clickable area
   - Screen reader support

4. **Validation**
   - Use `min`, `max`, `required`
   - Validate in onChange or onSubmit
   - Show error messages

5. **Default Values**
   - Set sensible defaults in useState
   - Don't leave empty unless intentional
   - Improves user experience

## Comparison Table

| Element | Use Case | State Type | Prop |
|---------|----------|------------|------|
| Select | One from many | string | `value` |
| Radio | One from few | string | `checked` |
| Checkbox | Boolean choice | boolean | `checked` |
| Number | Numeric input | number/string | `value` |
| Range | Bounded number | number/string | `value` |

## Next Steps
- Combine multiple inputs in forms
- Form validation
- Form submission with all data types
