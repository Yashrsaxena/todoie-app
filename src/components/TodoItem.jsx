const TodoItem = () => {
    return (<li className="todo-list-item">
        <span>
            <input type="checkbox" className="checkbox"/>
            <span>Eat</span>
        </span>
        <span>...</span>
    </li>)
}

export default TodoItem;