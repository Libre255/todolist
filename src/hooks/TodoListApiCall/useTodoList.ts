import { useEffect, useState } from "react"
import { ItemType } from "../../todolist/TodoTableTypes"
import { getTodoList } from "./getTodoList"

const useTodoList = ()=>{
    const [todoListData, settodoListData] = useState<ItemType[]>([])
    const [loading, setloading] = useState<boolean>(false);
    const [err, seterr] = useState<Error>()

    useEffect(()=>{
        const getTodosData = async ()=>{
            try{
                setloading(true);
                const ApiResponse = await getTodoList();
                if(ApiResponse!) throw new Error("getTodoList API call failed")
                settodoListData(ApiResponse);
            }catch(err){
                seterr(err as Error)
            }finally{
                setTimeout(()=>{
                    setloading(false);
                    console.log("hello world")
                }, 3000)
            }
        }
        getTodosData();
    },[])

    return {todoListData, err, loading}
}

export { useTodoList };