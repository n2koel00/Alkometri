import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottle, setBottle] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)
  const numbers = new Array(25).fill(null).map((_,i) =>i)

  const calculate = () => {
    let bac = 0
    let litres = bottle * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let xtrgrams = grams - (burning*time)

    if (gender === "male") {
      bac = (xtrgrams / (weight * 0.7))
    } else {
      bac = (xtrgrams / (weight * 0.6)) 
    }
    if (bac <= 0) {
      bac = 0.00
    }
    setResult(bac)
  }

  return (
    <div id="container">
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight </label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles </label>
        <select type="number" value={bottle} onChange={e => setBottle(e.target.value)}>
          {
            numbers.map(bottle => (
              <option value={bottle}>{bottle}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Time </label>
        <select type="number" value={time} onChange={e => setTime(e.target.value)}>
          {
            numbers.map(time => (
              <option value={time}>{time}</option>
            ))
          }
        </select>
      </div>
      <div>
      </div>
      <div>
        <label>Gender</label>
        <input type='radio' name='gender' value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type='radio' name='gender' value="Female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <label>Your blood alcohol level is </label>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button type='button' onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default App;
