import { useState } from "react"

// styles
import './buttonSelector.css'

const ButtonSelector = () => {

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
        <div className="container">
            <button type="button" className="btn btn-success box" onClick={() => handleChange(units + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
            </button>
            
            <input className="box" onChange={(e) => handleChange(parseInt(e.target.value))} type="number" value={units} />

            <button type="button" className="btn btn-danger box" onClick={() => handleChange(units - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
            </button>
        </div>

    )
} 
export default ButtonSelector;