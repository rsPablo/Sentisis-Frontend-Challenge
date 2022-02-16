import { Spinner } from 'react-bootstrap'
import './loading.css'
const Loading = () => {
    return (
        <div className="loading-container">
            <Spinner className="loading-size" animation="border" variant="warning"/>
            <span className="loading-text">Loading...</span>
        </div>
    )
} 
export default Loading