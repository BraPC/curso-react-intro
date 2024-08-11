import { createContext, useState } from 'react'
import { useLocalStorage } from "../Hooks";

const TodoContext = createContext()

function TodoProvider({children}) {
    const [serchValue, setserchValue] = useState('')
    const { item: todos, saveItem: setTodos, error, loading } = useLocalStorage('TODOS_V1', [])
    const [openModal, setOpenModal] = useState(false)

    const completedTodos = todos.filter(todo => !!todo.completed).length

    console.log(completedTodos)
    const totalTodos = todos.length
    const serchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase()
            return todoText.includes(serchValue.toLowerCase())
        }
    )
    const findTodo = (array, text) => {
        const todoIndex = array.findIndex((todo) => todo.text === text)
        return todoIndex
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text: text,
            completed: false
        })
        setTodos(newTodos)
        
    }

    const completeTodo = (text) => {
        const newTodos = [...todos]
        const index = findTodo(newTodos, text)
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const index = findTodo(newTodos, text)
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <TodoContext.Provider
        value={{
            completeTodo
            ,deleteTodo
            ,completedTodos
            ,setserchValue 
            ,serchValue
            ,serchedTodos
            ,openModal
            ,setOpenModal 
            ,addTodo
            ,loading 
            ,error
            ,totalTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}