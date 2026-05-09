import { useState } from 'react'

function Converter() {
    const [type, setType] = useState('length')
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    function convert() {
        if (type === 'length') {
            setResult('Meters: ' + (input / 100) + ' | Kilometers: ' + (input / 100000))
        } else {
            setResult('Fahrenheit: ' + ((input * 9/5) + 32).toFixed(2))
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Converter</h1>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="length">Length</option>
                <option value="temperature">Temperature</option>
            </select>
            <br/><br/>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} placeholder={type === 'length' ? 'Centimeters' : 'Celsius'} />
            <br/><br/>
            <button onClick={convert}>Convert</button>
            {result && <p>{result}</p>}
        </div>
    )
}

export default Converter