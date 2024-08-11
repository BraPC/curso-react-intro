import './CreateTodoButton.css'


function CreateTodoButton({openModal}) {
    return (
        <button className="CreateTodoButton"
        onClick={()=>{openModal(state => !state)}}
        >
            +
        </button>
    )
        
}

export {CreateTodoButton}