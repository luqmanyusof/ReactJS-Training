import { useState } from 'react'

function BMI() {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState('')

    function calculate() {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2)
        setResult('BMI: ' + bmi)
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>BMI</h1>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)" />
            <br/>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)" />
            <br/><br/>
            <button onClick={calculate}>Calculate</button>
            {result && <p>{result}</p>}
        </div>
    )
}

export default BMI