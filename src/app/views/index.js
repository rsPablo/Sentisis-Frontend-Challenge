// table
// .-- react --
import React, { useEffect, useState } from 'react';
import Table from '../shared/components/table';
import { ticketsService } from '../shared/services/'

const Home = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetchTickets()
    }, [])

    const fetchTickets = () => {
        ticketsService.getTicket()
        .then((resp) => {
            setData(resp)
        })
    }
    
    return (
        data && <Table tickets={data}/>
    )
}

export default Home

