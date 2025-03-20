import {  Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Input, makeStyles, Textarea } from '@fluentui/react-components';
import React from 'react';
import { ItemType } from './TodoTableTypes';

const useStyles = makeStyles({
  inputbox: {
    border:"none",
    fontWeight:"bold"
  }
})

type Props = {
  selectedTodo:ItemType | undefined;
  open:{
    openEdit:boolean;
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const TodoForm: React.FC<Props> = ({ open, selectedTodo }) => {
  const {openEdit, setOpenEdit} = open
  const classes = useStyles();

  const handleSubmit = (ev: React.FormEvent) =>{
    ev.preventDefault();
    alert("submited form");
  }
  return (
    <Dialog modalType='alert' open={openEdit}>
      <DialogSurface>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            
            <DialogTitle>
              <Input className={classes.inputbox} required type='text' id={"todotitle"} defaultValue={selectedTodo?.title}/>
            </DialogTitle>
            
            <DialogContent>
              <Field>
                <Textarea defaultValue={selectedTodo?.content}/>
              </Field>
            </DialogContent>

            <DialogActions>
              <Button appearance="primary">Save</Button>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary" onClick={()=>setOpenEdit(false)}>Close</Button>
              </DialogTrigger>
            </DialogActions>
          
          </DialogBody>
        </form>
      </DialogSurface>
    </Dialog>
  );
};

export default TodoForm;