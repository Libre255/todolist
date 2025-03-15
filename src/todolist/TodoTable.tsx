import { createTableColumn, Table, TableBody, TableColumnDefinition, TableHeader, TableHeaderCell, TableRow, TableSelectionCell, useTableFeatures, useTableSelection } from '@fluentui/react-components';
import React from 'react';
import { todosMockData } from './MockDataTodo';
import { ItemType, Props } from './TodoTableTypes';
//CRUD = CREATE, READ, UPDATE, DELET


const columns:TableColumnDefinition<ItemType>[] = [
    createTableColumn<ItemType>({
        columnId:"title"
    }),
    createTableColumn<ItemType>({
        columnId:"lastupdated"
    }),
    createTableColumn<ItemType>({
        columnId:"edit"
    }),
    createTableColumn<ItemType>({
        columnId:"delet"
    }),
]

const TodoTable: React.FC<Props> = ({ }) => {
  const { getRows, selection: {
            allRowsSelected,
            someRowsSelected,
            toggleRow,
            isRowSelected
            }
        } = useTableFeatures({
            columns,
            items:todosMockData
        }, [
            useTableSelection({
                selectionMode:"multiselect"
            })
        ])
  
  const rows = getRows(row => {
    const selected = isRowSelected(row.rowId);

    return {
        ...row,
        onClick: (e:React.MouseEvent)=> toggleRow(e, row.rowId),
        onKeyDown: (e:React.KeyboardEvent) => {
            if(e.key === ""){
                e.preventDefault();
                toggleRow(e, row.rowId)
            }
        },
        selected,
        appearance: selected ? ("brand" as const): ("none" as const)
    }
  })        
    
  return (
    <Table aria-label="Table with multiselect" style={{ minWidth: "550px" }}>
        <TableHeader>
            <TableRow>
                <TableSelectionCell/>

                <TableHeaderCell>Title</TableHeaderCell>
                <TableHeaderCell>Last Updated</TableHeaderCell>
                <TableHeaderCell>Edit</TableHeaderCell>
                <TableHeaderCell>Delet</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {}
        </TableBody>
    </Table>
  );
};

export default TodoTable;