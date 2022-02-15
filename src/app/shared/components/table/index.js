// table

import moment from "moment";
import { useEffect, useState } from "react";
import Loading from "../loading";
import ModalInfo from "../modal";
import { Table } from 'react-bootstrap'

import './table.css'

const TableData = ({tickets}) => {

    const [showData, setShowData] = useState({show: false, data: {}})
    const [units, setUnits] = useState([{}])
    const handleClose = () => setShowData({...showData, show: false});
    const handleShow = (element) => setShowData({show: false, data: element});

    const Rows = () => {
        return tickets.map((element, index) => {     
            const { id, title, type, releaseDate, price } = element
            return (
                <tr className="rows" key={id} onClick={() => handleShow(element)}>
                    <td>{title}</td>
                    <td>{type}</td>
                    <td>{moment(releaseDate).format('DD-MM-YYYY')}</td>
                    <td>
                        {buttonsSelector(index)}
                    </td>
                    <td>{price}€</td>
                </tr>
            )
        }); 
    }

    const handleUpdate = (index, isMore) => {
        const product = tickets[index]
        const newUnits = [...units];
        if (!newUnits[index] || Object.keys(newUnits[0]).length === 0) {
            newUnits[index] = {
                id: product.id,
                units: isMore ? 1 : 0
            }
        } else {
            newUnits[index] = {
                id: product.id,
                units: isMore ? newUnits[index].units + 1 : newUnits[index]?.units - 1
            }
        }
        console.log(newUnits)
        setUnits(newUnits);
    }

    const buttonsSelector = (index) => {
        return (
            <div className="container">
                <button type="button" className="btn btn-success box" onClick={() => handleUpdate(index, true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </button>
                
                <input className="box" onChange={(e) => console.log(e.target.value)} type="number" value={units[index]?.units} />
    
                <button type="button" className="btn btn-danger box" onClick={() => handleUpdate(index, false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                    </svg>
                </button>
            </div>
        )
    }
   
    return (
        <div>
           {tickets.length === 0 ? 
               <Loading/>
               :
               (
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
               )
           }
           <ModalInfo showData={showData} handleClose={handleClose}/>
        </div>
    )

}
export default TableData;

