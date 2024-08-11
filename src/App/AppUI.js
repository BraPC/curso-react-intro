import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { TodoEmpy } from "../TodoEmpy";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    const {
        completeTodo
        ,deleteTodo
        ,serchedTodos 
        ,loading 
        ,error
        ,openModal
        ,setOpenModal
    } = useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodoLoading/>}
                {error && <TodoError/>}
                {(!loading && serchedTodos.length === 0) && <TodoEmpy/>}
                {serchedTodos.map(
                todo =>(<TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onCompleted={()=> completeTodo(todo.text)}
                    onDelete={()=> deleteTodo(todo.text)}/>)
                )}
            </TodoList>
            <CreateTodoButton openModal = {setOpenModal}/>

            {openModal && (<Modal>
                <TodoForm/>
            </Modal>)}
        </>
    )
}

export {AppUI}