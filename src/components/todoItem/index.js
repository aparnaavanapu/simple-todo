import './index.css'
const TodoItem = props=>{

    const {todoDetails,deleteTodo}=props
    const {id,title}=todoDetails
    
    const handleClick=()=>{

        deleteTodo(id)

    }


    return (
        <li className="list-item">
            <p className="title">{title}</p>
            <button className="btn" onClick={handleClick}>Delete</button>
        </li>
    )
}

export default TodoItem