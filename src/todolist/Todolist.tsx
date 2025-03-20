import React, { useState } from 'react';
import TodoMenu from './TodoMenu';
import TodoTable from './TodoTable';
import TodoForm from './TodoForm';
import { ItemType } from './TodoTableTypes';
import { useTodoList } from '../hooks/TodoListApiCall/useTodoList';

type Props = {};
// create, edit, delet, search, sort by date
const Todolist: React.FC<Props> = () => {
  const [selectedTodo, setselectedTodo] = useState<ItemType>();
  const [openEdit, setOpenEdit] = useState(false);
  const {todoListData, loading, err} = useTodoList();

  // if(err){
  //   return <h1>{err.message}</h1>
  // }
  return (
    <div>
      <TodoMenu/>
      <TodoTable setOpenEdit={setOpenEdit} 
                 setselectedTodo={setselectedTodo}
                 todoListData={todoListData}
                 loading={loading} />
      <TodoForm  open={{openEdit, setOpenEdit}} selectedTodo={selectedTodo}/>
    </div>
  );
};

export default Todolist;