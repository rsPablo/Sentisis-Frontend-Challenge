// table

import moment from "moment";
import ButtonSelector from "../button-selector";
import { Loading } from "../loading";

const Table = ({tickets}) => {

    const rows = () => {
        return tickets.map((element, index) => {     
            const { id, title, type, releaseDate, price } = element
            return (
                <tr key={id}>
                    <td>{title}</td>
                    <td>{type}</td>
                    <td>{moment(releaseDate).format('DD-MM-YYYY')}</td>
                    <td>
                        <ButtonSelector
                            key={index}
                        />
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
                    <table className="table">
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

                            {rows()}
                        </tbody>
                    </table>
               )
           }
        </div>
    )

}
export default Table;

