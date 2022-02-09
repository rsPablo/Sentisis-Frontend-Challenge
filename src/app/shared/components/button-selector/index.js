import { useState } from "react"

// styles
import './buttonSelector.css'

const ButtonSelector = ({key}) => {

    const [units, setUnits] = useState(0)
    console.log(units)

    const handleChange = (value) => {
        if (isNaN(value) || value < 0) {
            setUnits(0)
        } else {
            setUnits(value)
        }
    }

    return (
        <div className="container" key={key}>
            <button type="button" className="btn btn-success box" onClick={() => handleChange(units + 1)}>+</button>
            <input className="box" onChange={(e) => handleChange(parseInt(e.target.value))} type="number" value={units} />
            <button type="button" className="btn btn-danger box" onClick={() => handleChange(units - 1)}>-</button>
        </div>

    )
} 
export default ButtonSelector;