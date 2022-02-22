// table
// .-- react --
import React, { useEffect, useState } from 'react';
import Table from '../shared/components/table';
import { ticketsService } from '../shared/services/'
import Loading from '../shared/components/loading'
import Alerts from '../shared/components/alert';

const Home = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true) 
    const [fetchError, setFechError] = useState(false)
    useEffect(() => {
        setTimeout(() => fetchTickets(), 1000)
    }, [])

    const fetchTickets = () => {
        ticketsService.getTicket()
        .then((resp) => {
            const respSorted = resp.sort((a,b) => b.releaseDate - a.releaseDate)
            setData(respSorted)
        })
        .catch(error => setFechError(error))
        .finally(() => setLoading(false))
    }
    
    return (
        fetchError ? <Alerts/> :
        loading ? <Loading/> : <Table tickets={data}/>
    )
}

export default Home

