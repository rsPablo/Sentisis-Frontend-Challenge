import { Modal, Button } from 'react-bootstrap';

const ModalInfo = ({showData, handleClose, addUnit}) => {
    const {show, data: {title, type, description}} = showData;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title} - {type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addUnit}>
                        Add
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalInfo