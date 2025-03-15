import React from 'react';
import TodoMenu from './TodoMenu';
import TodoTable from './TodoTable';

type Props = {
  // Define your props here
};
// create, edit, delet, search, sort by date
const Todolist: React.FC<Props> = () => {
  

  return (
    <div>
      <TodoMenu/>
      <TodoTable/>
    </div>
  );
};

export default Todolist;