'use server'
import { revalidatePath } from "next/cache"
import db from "./db"


export const completeTodo = async (id) =>{
    await db.todo.update({
        where: {id},
        data:{
            completed: true
        }
    })
    
    revalidatePath('/todos')
} 

export const NewTodo = async (formData) => {
    const todo = await db.todo.create({
        data:{
            content: formData.get('content')
        }
    })
    //Delete the cash of the page
    revalidatePath('/todos')
}