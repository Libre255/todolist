export type Props = {
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setselectedTodo:  React.Dispatch<React.SetStateAction<ItemType | undefined>>;
  todoListData: ItemType[];
  loading: boolean;
};

export type lastupdatedCell = {
    content:string;
}

export type ItemType = {
    id:string;
    title:string;
    content:string;
    lastupdate:string;
}