import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from "ag-grid-community";
import { Datum } from "../types";

export interface Props {
  data: Datum[];
}

export function Table(props: Props) {
  const cellLeft = { textAlign: 'left' }
  const cellRight = { textAlign: 'right' }

  const colDefs: ColDef[] = [
    { field: 'user.name', headerName: 'Name', cellStyle: cellLeft },
    { field: 'postsCount', headerName: 'Posts', cellStyle: cellRight },
    { field: 'commentsCount', headerName: 'Comments', cellStyle: cellRight },
    { field: 'albumsCount', headerName: 'Albums', cellStyle: cellRight },
    { field: 'photosCount', headerName: 'Photos', cellStyle: cellRight },
    { field: 'todosCount', headerName: 'Todos', cellStyle: cellRight },
  ]

  return (
    <div
      className="ag-theme-quartz" 
      style={{ height: 'auto', width: '100%' }} 
      >
      <AgGridReact
        rowData={props.data}
        columnDefs={colDefs}
        domLayout="autoHeight"
      />
    </div>
  )
}
