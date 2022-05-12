import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function Table(props){
    return(
        <div className="ag-theme-material"
            style={{ height:'500px', width:'95%', margin: 'auto'}}>

            <AgGridReact
                columnDefs={props.columns}
                rowData={props.customers}

            >
            </AgGridReact>
        </div>
    )
}