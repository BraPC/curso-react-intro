import { useContext, useState } from "react"
import "./TodoForm.css"
import { TodoContext } from "../TodoContext"

function TodoForm(  ) {

    const {setOpenModal,addTodo} = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState("")

    const onSubmit = (event) =>{
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onKeyDown = (event) => {
        (event.key === 'Enter') && onSubmit(event) 
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="escribe aqui"/>
            <button 
            type="button"
            onClick={onCancel}
            className="TodoForm-button TodoForm-button--cancel"
            >Cancelar</button>
            <button
            type="submit" 
            className="TodoForm-button TodoForm-button--add"
            >Añadir</button>
        </form>
    )
}
export {TodoForm}