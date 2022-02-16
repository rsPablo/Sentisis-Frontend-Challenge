import { Alert } from 'react-bootstrap';
import './alert.css'

const Alerts = () => {
    return (
        <div className="alert-container">
            <Alert className="alert-item" variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <span>
                    Please, try again later
                </span>
            </Alert>
        </div>
    )
}
export default Alerts