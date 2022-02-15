import { Modal, Button } from 'react-bootstrap';

const ModalInfo = ({showData, handleClose, addUnit}) => {
    const {show, data: {index, title, type, description}} = showData;
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
                    <Button variant="primary" onClick={(e) => addUnit(index, true, e)}>
                        Add
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

const ModalSummary = ({show, units, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>{units.map((el, index) => {
                return (
                    <div key={index}>
                        <span>
                            {el.name}
                        </span>
                        <span>
                            {el.units}
                        </span>
                        <span>
                            {el.units * el.price}
                        </span>
                    </div>
                )
            })}</Modal.Body>
        </Modal>
    )

}


export {ModalInfo, ModalSummary}