import axios from "axios"
import { ItemType } from "../../todolist/TodoTableTypes";

const ApiPoint = "URL"

const getTodoList = async (): Promise<ItemType[]>=>{
    const response = await axios.get(ApiPoint);
    const todoList = response.data
    
    return todoList;
}

export {getTodoList}