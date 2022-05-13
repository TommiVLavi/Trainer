import { useEffect, useState } from 'react';
import Table from './Table';
import parseJSON from 'date-fns/parseJSON'

export default function Trainings(){
    const [trainings, setTrain] = useState([]);

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(resp => resp.json())
        .then(data => {
            setTrain(data.content)
        })
        .catch(err => console.error(err))
    }

    const columns = [
        { field: "date", sortable: true, filter: true},
        { field: "duration", sortable: true, filter: true},
        { field: "activity", sortable: true, filter: true}
    ]

    return(
        <div>
            <Table columns={columns} data={trainings}/>
        </div>
    )
}