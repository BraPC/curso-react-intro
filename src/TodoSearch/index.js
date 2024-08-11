
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

function TodoSearch() {
    const {serchValue, setserchValue} = useContext(TodoContext)    

    return (
        <input placeholder="Cortar cebolla"
        className="TodoSearch"
        value={serchValue}
        onChange={(event)=>{
            setserchValue(event.target.value)
        }}/>
    )
}

export {TodoSearch}