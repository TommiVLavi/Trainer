import { useEffect, useState, useRef } from 'react';
import Table from './Table'
import Add from './AddTrain'
import Delete from './Delete'
import Edit from './EditTrain'
import Stack from '@mui/material/Stack';
import parseJSON from 'date-fns/parseJSON'

export default function Trainings(){
    const [trainings, setTrain] = useState([]);
    const [single, setSingle] = useState ({date: new Date(), duration: 0, activity: '', customer: ''})
    const [state, setState] = useState(1)
    const gridRef = useRef();

    const [customers, setCust] = useState([]);
    const [singCust, setSingCust] = useState ({firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''})

    useEffect(() => {
        fetchData()
    },[state])
    

    const custDataFetching = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(resp => resp.json())
        .then(data => {
            setCust(data.content)
        })
        .catch(err => console.error(err))
    }


    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(resp => resp.json())
        .then(data => {
            setTrain(data.content)
        })
        .catch(err => console.error(err))
    }


    const saveTrain = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
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


    const deleteTrain = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTrain(trainings.filter((single, index) =>
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


    const editTrain = () => {
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
      headerName: 'TRAININGS',
      children: [
        { field: "date", sortable: true,  floatingFilter: true},
        { field: "duration", sortable: true,  floatingFilter: true},
        { field: "activity", sortable: true,  floatingFilter: true},
        { field: "customer", sortable: true,  floatingFilter: true},
      ]}
    ]
    

    return(
        <div>
            <Table columns={columns} data={trainings} gridRef={gridRef}/>
            

            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <Add saveIt={saveTrain} setSingle={setSingle} single={single} data={trainings} custData={customers} singCust={singCust}/>
                <Edit editIt={editTrain} setSingle={setSingle} single={single}/>
                <Delete deleteIt={deleteTrain}/>
            </Stack>
            
        </div>
    )
}