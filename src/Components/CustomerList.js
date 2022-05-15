import { useEffect, useState, useRef } from 'react';
import Table from './Table'
import Add from './AddCust'
import Delete from './Delete'
import Edit from './EditCust'


export default function Customers(){
    const [customers, setCust] = useState([]);
    const [single, setSingle] = useState ({firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''})
    const [state, setState] = useState(1)
    const gridRef = useRef();
    

    useEffect(() => {
        fetchData()
    },[state])


    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(resp => resp.json())
        .then(data => {
            setCust(data.content)
        })
        .catch(err => console.error(err))
    }


    const saveCust = () => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(single)
        })
        .then( resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))

        setState(() => state + 1)
    }


    const deleteCust = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setCust(customers.filter((single, index) =>
                index !== gridRef.current.getSelectedNodes()[0].childIndex
            ))

            var id = gridRef.current.getSelectedNodes()[0].data.links[1].href
            console.log(id)

            fetch(id, {
                method: 'DELETE'
            })

        } else {
            alert('Select a row')
        }
    }


    const editCust = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            var id = gridRef.current.getSelectedNodes()[0].data.links[1].href
            console.log(id)

            fetch(id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(single)
            })
            .then( resp => resp.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

            setState(() => state + 1)

        } else {
            alert('Select a row')
        }
    }


    const columns = [{
        headerName: 'CUSTOMERS',
        children: [
            { field: "firstname",   },
            { field: "lastname",  },
            { field: "streetaddress",  },
            { field: "postcode", },
            { field: "city",  },
            { field: "email",  },
            { field: "phone",  },
        ]}
    ]

    return(
        <div>
            <Table columns={columns} data={customers} gridRef={gridRef} />
            <Add saveIt={saveCust} setSingle={setSingle} single={single} />
            <Edit editIt={editCust} setSingle={setSingle} single={single}/>
            <Delete deleteIt={deleteCust}/>
        </div>
    )
}