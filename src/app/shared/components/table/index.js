// table

import moment from "moment";
import { useState } from "react";
import ButtonSelector from "../button-selector";
import Loading from "../loading";
import ModalInfo from "../modal";
import { Table } from 'react-bootstrap'

import './table.css'

const TableData = ({tickets}) => {

    const [showData, setShowData] = useState({show: false, data: {}})
    const [addUnit, setAddUnit] = useState({})

    const handleClose = () => setShowData({...showData, show: false});
    const handleAddUnit = () => {
        setShowData({...showData, show: false})
        setAddUnit(1)
    }
    const handleShow = (element) => setShowData({show: true, data: element});

    const Rows = () => {
        return tickets.map((element, index) => {     
            const { id, title, type, releaseDate, price } = element
            return (
                <tr className="rows" key={id} onClick={() => handleShow(element)}>
                    <td>{title}</td>
                    <td>{type}</td>
                    <td>{moment(releaseDate).format('DD-MM-YYYY')}</td>
                    <td>
                        <ButtonSelector key={id} addUnit={addUnit}/>
                    </td>
                    <td>{price}€</td>
                </tr>
            )
        }); 
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
           <ModalInfo showData={showData} handleClose={handleClose} addUnit={handleAddUnit} />
        </div>
    )

}
export default TableData;

