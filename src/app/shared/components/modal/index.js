import { Modal, Button, Table } from 'react-bootstrap';
import './modal-summary.css'
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

const ModalSummary = ({show, values, handleClose}) => {
    const sortedList = values && values.sort((a,b) => b.units - a.units)
    console.log(sortedList)
    let count = 0
    values.forEach(element => {
        if (element) {
            count = (parseInt(element.price) * parseInt(element.unit)) + count
        }
    });
    const body = sortedList.map((el, index) => {
        if (el) {     
            return (
                <tr key={index} >
                   <td>{el.title}</td>
                   <td>{el.units}</td>
                   <td>{el.price * el.units}</td>
                </tr>
            )
        }
    })
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Units</th>
                            <th scope="col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    )
}


export {ModalInfo, ModalSummary}