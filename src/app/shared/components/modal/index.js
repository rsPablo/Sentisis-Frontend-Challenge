import React from 'react';
import { Modal, Button, Table, Badge } from 'react-bootstrap';
import './modal-summary.css'
const ModalInfo = ({showData, handleClose, addUnit}) => {
    const {show, data: {index, title, type, description}} = showData;
    let badge = null;
    switch (type) {
        case "show":
            badge = <Badge bg="success">{type}</Badge>
            break;
        case "talk":
            badge = <Badge bg="primary">{type}</Badge>
            break;
        case "musical":
            badge = <Badge bg="info">{type}</Badge>
            break;
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>
                       {title} {badge}
                    </h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h5>
                        Description: 
                    </h5>
                    {description}
                </div>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={(e) => addUnit(index, true, e)}>
                        Add
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

const ModalSummary = ({show, values, handleClose}) => {
    const sortedList = values && values.sort((a,b) => b.units - a.units)
    let count = 0
    values.forEach(element => {
        if (element) {
            count = (parseInt(element.price) * parseInt(element.units)) + count
        }
    });
    const body = sortedList.map((el, index) => {
        return (
            <React.Fragment key={el.title}>
                {el.units !== 0 ? (
                    <tr >
                        <td>{el.title}</td>
                        <td>{el.units}</td>
                        <td>{el.price * el.units}€</td>
                    </tr>
                ): null}
                {index === sortedList.length - 1 ? (
                     <tr className="text-total-price">
                        <td colSpan={2}>Total to be paid</td>
                        <td>{count}€</td>
                    </tr>
                ): null}
            </React.Fragment>
        )
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