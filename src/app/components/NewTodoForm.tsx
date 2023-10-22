import { NewTodo } from "../../../utils/actions"

const NewTodoForm = ({}) => {
  return (
    <>
      <form action={NewTodo}>
        <input name="content" type="text" className="border border-black text-black" />
        <button type="submit">New Todo</button>
      </form>
    </>
  )
}

export default NewTodoForm
