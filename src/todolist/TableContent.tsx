import { TableBody, TableFeaturesState, TableRow, TableSelectionCell, TableCell, TableCellLayout, makeStyles} from '@fluentui/react-components';
import React from 'react';
import { ItemType } from './TodoTableTypes';
import { DeleteRegular, EditRegular } from '@fluentui/react-icons';

const usestyles = makeStyles({
    pointer: {
        cursor:"pointer"
    }
})

type Props = {
  tableConfig: TableFeaturesState<ItemType>;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setselectedTodo:  React.Dispatch<React.SetStateAction<ItemType | undefined>>;
  loading:boolean;
};

const TableContent: React.FC<Props> = ({tableConfig, setOpenEdit, setselectedTodo, loading}) => {
  const {getRows, selection: {toggleRow, isRowSelected}} = tableConfig
  const classes = usestyles();

  const rows = getRows(row => {
    const selected = isRowSelected(row.rowId);

    return {
        ...row,
        onClick: (e:React.MouseEvent)=> toggleRow(e, row.rowId),
        onKeyDown: (e:React.KeyboardEvent) => {
            if(e.key === " "){
                e.preventDefault();
                toggleRow(e, row.rowId)
            }
        },
        selected,
        appearance: selected ? ("brand" as const): ("none" as const)
    }
  })  

  return (
    <TableBody>
        {rows?.map(({item, selected, onClick, appearance})=>(
            <TableRow key={item.id} aria-selected={selected} appearance={appearance}>
                <TableSelectionCell onClick={onClick} checked={selected} checkboxIndicator={{"aria-label":"Select row"}}/>
                <TableCell>
                    <TableCellLayout>
                        {item.title}
                    </TableCellLayout>
                </TableCell>

                <TableCell>
                    <TableCellLayout>
                        {item.lastupdate}
                    </TableCellLayout>
                </TableCell>
                <TableCell>
                    <TableCellLayout>
                        <EditRegular className={classes.pointer} 
                                     onClick={()=>{setOpenEdit(true); setselectedTodo(item)}} />
                    </TableCellLayout>
                </TableCell>
                <TableCell>
                    <TableCellLayout className={classes.pointer} media={<DeleteRegular/>}/>
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
  );
};

export default TableContent;