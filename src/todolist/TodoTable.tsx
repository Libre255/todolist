import { createTableColumn, Spinner, Table, TableColumnDefinition, TableHeader, TableHeaderCell, TableRow, TableSelectionCell, useTableFeatures, useTableSelection } from '@fluentui/react-components';
import React, { useCallback } from 'react';
import { todosMockData } from './MockDataTodo';
import { ItemType, Props } from './TodoTableTypes';
import TableContent from './TableContent';

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
//need to change mockdata once real data comes in
const TodoTable: React.FC<Props> = ({ setOpenEdit, setselectedTodo, todoListData, loading }) => {
  const tableConfig = useTableFeatures(
    {
        columns,
        items: todosMockData
    }, 
    [
        useTableSelection({
            selectionMode:"multiselect"
        })
    ])
  const {selection: {
            allRowsSelected,
            someRowsSelected,
            toggleAllRows,
         }} = tableConfig
  
    
  const toggleAllKeydown = useCallback((e: React.KeyboardEvent<HTMLDivElement>)=>{
    if(e.key === " "){
        toggleAllRows(e);
        e.preventDefault();
    }
  }, [])

  if(loading) return <Spinner/>
  return (
    <Table aria-label="Table with multiselect" style={{ minWidth: "550px" }}>
        <TableHeader>
            <TableRow>
                <TableSelectionCell
                    checked={ allRowsSelected ? true : someRowsSelected ? "mixed" : false }
                    onClick={toggleAllRows}
                    onKeyDown={toggleAllKeydown}
                    checkboxIndicator={{"aria-label": "Select all rows"}}
                />

                <TableHeaderCell>Title</TableHeaderCell>
                <TableHeaderCell>Last Updated</TableHeaderCell>
                <TableHeaderCell>Edit</TableHeaderCell>
                <TableHeaderCell>Delet</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableContent 
            tableConfig={tableConfig}
            setOpenEdit={setOpenEdit}
            setselectedTodo={setselectedTodo}
            loading={loading}/>
    </Table>
  );
};

export default TodoTable;