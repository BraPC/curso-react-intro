import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'

function TodoCounter() {
  const {completedTodos:completed , totalTodos:total}= useContext(TodoContext)
  return (
      <h1 className="TodoCounter">
        {(completed === total)?'Felicidades!!!! completastes todo los TODOs':
        `Completaste ${completed} de ${total} TODOs`}
      </h1>
    )
}

export {TodoCounter}