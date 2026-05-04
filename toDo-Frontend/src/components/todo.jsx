import './todo.css';
export function Todo({ todo, taskComplete, deleteTask, editTask }) {

    return (

        <li>
            <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
            <div>
                <button className="tbtn" onClick={() => { taskComplete(todo.id) }}><i className="bi bi-check-lg"></i></button>
                <button className="ebtn" onClick={() => { editTask(todo.id) }}><i className="bi bi-pencil-square"></i></button>
                <button className="dbtn" onClick={() => { deleteTask(todo.id) }}><i className="bi bi-trash3"></i></button>
            </div>
        </li>
    );
}