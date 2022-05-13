import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { useMemo } from 'react';

export default function Table(props){
    const defaultColDef = {
            flex: 1,
            minWidth: 140,
            filter: true,
        }
    
    return(
        <div className="ag-theme-material"
            style={{ height:'500px', width:'95%', margin: 'auto'}}>

            <AgGridReact
                columnDefs={props.columns}
                rowData={props.data}
                animateRows={true}
                defaultColDef={defaultColDef}
            >
            </AgGridReact>
        </div>
    )
}