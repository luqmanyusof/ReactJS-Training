import { useState } from 'react'

function Area() {
    const [type, setType] = useState('rectangle')
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [result, setResult] = useState('')

    function calculate() {
        if (type === 'rectangle') {
            setResult(a * b)
        } else {
            setResult((3.14 * a * a).toFixed(2))
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Area</h1>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="rectangle">Rectangle</option>
                <option value="circle">Circle</option>
            </select>
            <br/><br/>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder={type === 'rectangle' ? 'Length' : 'Radius'} />
            <br/>
            {type === 'rectangle' && <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Width" />}
            <br/><br/>
            <button onClick={calculate}>Calculate</button>
            {result && <p>Area: {result}</p>}
        </div>
    )
}

export default Area