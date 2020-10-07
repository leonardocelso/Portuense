import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';

function  DataTableGenerica (props) {

    const columns = props.columns;
    const data = props.data;
    const title = props.title;

    const customRowsPerPageText = {
        rowsPerPageText: 'Linhas por página: ', 
        rangeSeparatorText: 'de ', 
        noRowsPerPage: false, 
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos '
    }

    const customStyles = {
        headCells: {
            style: {              
                color: 'var(--color-primary)',
                fontSize: '1em'
            },
        },
        rows: {
            style: {
                fontSize: '0.9em'
            }
        }
    };

    return (
        <Fragment>
            <DataTable className="data-table"
                noHeader={true}
                title={title}
                columns={columns}
                data={data}
                striped={true}
                highlightOnHover={true}
                responsive={true}
                pagination={true}
                customStyles={customStyles}
                paginationComponentOptions={customRowsPerPageText}                           
            />
        </Fragment>
    )
}
export default DataTableGenerica;