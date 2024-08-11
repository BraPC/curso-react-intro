import './TodoItem.css'
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CheckIcon } from "../TodoIcon/CheckIcon";

function TodoItem({text, completed, onCompleted, onDelete}) {
    return (
      <li className="TodoItem">
        <CheckIcon complete={completed} onCompleted={onCompleted} />
        {/* <span 
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onCompleted}>{completed?('V'):('X')}</span> */}
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        {/* <span className="Icon Icon-delete" 
        onClick={onDelete}>X</span> */}
        <DeleteIcon onDelete={onDelete}/>
      </li>
    )
}

export {TodoItem}