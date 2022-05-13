import { useEffect, useState } from 'react';
import Table from './Table'

export default function Customers(){
    const [customers, setCust] = useState([]);

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(resp => resp.json())
        .then(data => {
            setCust(data.content)
        })
        .catch(err => console.error(err))
    }

    const columns = [
        { field: "firstname", sortable: true, filter: true },
        { field: "lastname", sortable: true, filter: true },
        { field: "streetaddress", sortable: true, filter: true },
        { field: "postcode", sortable: true, filter: true },
        { field: "city", sortable: true, filter: true },
        { field: "email", sortable: true, filter: true },
        { field: "phone", sortable: true, filter: true }
    ]

    return(
        <div>
            <Table columns={columns} data={customers}/>
        </div>
    )
}