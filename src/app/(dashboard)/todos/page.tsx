//this url will be ignored, so it will be considerated home
//the folder with () is ignored
import TodoList from "@/app/components/TodoList"
import db from "../../../../utils/db"

const getData = async () => {
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
