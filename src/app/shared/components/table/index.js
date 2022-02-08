// table

import { Loading } from "../loading";

const Table = ({tickets}) => {
    console.log(tickets)

    const rows = () => {
        return tickets.map((element, index) => {     
            const { title, type, releaseDate, price } = element
            return (
                <tr>
                    <td>{title}</td>
                    <td>{type}</td>
                    <td>{releaseDate}</td>
                    <td>{buttonsSelector()}</td>
                    <td>{price}</td>
                </tr>
            )
        }); 
    } 

    const buttonsSelector = () => {
        return (
            <div>
                <button type="button" class="btn btn-success">+</button>
                <input type="number" id="replyNumber" min="0" data-bind="value:replyNumber" />
                <button type="button" class="btn btn-danger">-</button>
            </div>

        )
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

