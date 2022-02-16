// table
// .-- react --
import React, { useEffect, useState } from 'react';
import Table from '../shared/components/table';
import { ticketsService } from '../shared/services/'
import Loading from '../shared/components/loading'
const Home = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true) 
    useEffect(() => {
        setTimeout(() => fetchTickets(), 3000)
        
    }, [])

    const fetchTickets = () => {
        ticketsService.getTicket()
        .then((resp) => {
            const respSorted = resp.sort((a,b) => b.releaseDate - a.releaseDate)
            setData(respSorted)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }
    
    return (
        loading ? <Loading/> : <Table tickets={data}/>
    )
}

export default Home

