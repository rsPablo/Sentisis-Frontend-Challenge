// table

import moment from "moment";
import { useEffect, useState } from "react";
import { ModalInfo, ModalSummary } from "../modal";
import { Table, Button } from 'react-bootstrap'

import './table.css'

const TableData = ({tickets}) => {

    const [showData, setShowData] = useState({show: false, data: {}})
    const [showSummary, setShowSummary] = useState(false)
    const [units, setUnits] = useState([])

    useEffect(() => {
        if (!JSON.parse(window.localStorage.getItem('units'))) {
            setUnits([])
        } else {
            setUnits(JSON.parse(window.localStorage.getItem('units')));
        }
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('units', JSON.stringify(units));
    }, [units]);


    const handleClose = () => setShowData({...showData, show: false});
    const handleShow = (element, index) =>  setShowData({show: true, data: {...element, index: index}})

    const Rows = () => {
        return tickets.map((element, index) => {     
            const { id, title, type, releaseDate, price } = element
            return (
                <tr className="rows" key={id} >
                    <td onClick={() => {handleShow(element, index)}}>{title}</td>
                    <td onClick={() => {handleShow(element, index)}}>{type}</td>
                    <td onClick={() => {handleShow(element, index)}}>{moment(releaseDate).format('DD-MM-YYYY')}</td>
                    <td>
                        {buttonsSelector(index)}
                    </td>
                    <td onClick={() => {handleShow(element, index)}}>{price}€</td>
                </tr>
            )
        }); 
    }

    const handleUpdate = (index, isMore, e) => {
        const product = tickets[index]
        const newUnits = [...units];
        if (!newUnits[index] || Object.keys(newUnits[index]).length === 0) {
            newUnits[index] = {
                title: product.title,
                units: isMore ? 1 : 0,
                price: product.price
            }
        } else {
            newUnits[index] = {
                title: product.title,
                units: isMore ? newUnits[index].units + 1 : newUnits[index]?.units === 0 ? 0 : newUnits[index]?.units - 1,
                price: product.price
            }
        }
        setUnits(newUnits);
        handleClose();

        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }
    const buttonsSelector = (index) => {
        const values = units[index]?.units ?? 0
        return (
            <div className="container-selector ">
                {/* <button type="button" className="btn btn-success box" onClick={(e) => handleUpdate(index, true, e)}>
                </button> */}
                <Button variant="success" className="btn btn-success box" onClick={(e) => handleUpdate(index, true, e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </Button>               
                <input className="box" readOnly type="number" value={values}/>

                <Button variant="danger" className="btn btn-danger box" onClick={(e) => handleUpdate(index, false, e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                    </svg>
                </Button>
            </div>
        )
    }

    const SummaryButton = () => {

        if (units.length !== 0) {
            return (
                <Button variant="primary" className="btn shopIcon" onClick={() => setShowSummary(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                </Button>
            )
        }
        return null;
    }
   
    return (
        <div>
            <div className="container-table-button">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">Units</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Rows/>
                    </tbody>
                </Table>
                <SummaryButton className="shopIcon"/>
            </div>
           <ModalInfo showData={showData} handleClose={handleClose} addUnit={handleUpdate}/>
           <ModalSummary show={showSummary} handleClose={() => setShowSummary(false)} values={[...units]}/>
        </div>
    )

}
export default TableData;

