import { useEffect, useState } from 'react';
import { Todo } from "./todo";
import './todolist.css'
export function TodoList() {
    let [iptodo, setIptodo] = useState('');
    let [todos, setTodos] = useState([])
    // console.log(todos);
    const fetchTodos = ()=>
    {
        fetch("http://localhost:3000/todos").then(res => res.json()).then(
            data => setTodos(data));
    }
    useEffect(() => {
        fetchTodos();
    }, [])
    function addTodo() {
        fetch("http://localhost:3000/addtodos",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ iptodo })
            }
        ).then(res => res.json()).then(data => {
            setTodos(data)
        });
    }
    //todo listeners
    const taskComplete = async (id) => {
        await fetch(`http://localhost:3000/completeTask/${id}`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: true }),
            }
        ).then(fetchTodos())
    }
    function editTask() {
        
    }
    async function deleteTask(id) {
        await fetch(`http://localhost:3000/deleteTask/${id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: true }),
            }
        ).then(fetchTodos());
    }
    //  console.log(todos);
    function ipText(event) {
        setIptodo(event.target.value);
    }
    function saveChanges() {

    }

    return (
        <div id="container">
            <div id="input-container">
                <input type="text" id="ipbox" onChange={ipText} ></input>
                <button id="btn1" onClick={addTodo}>Add Todo</button>
                <button id="btn2" onClick={saveChanges}>Save Changes</button>
            </div>
            <ul>
                {
                    todos.map((todo, i) => {
                        return <Todo key={i} todo={todo}
                            taskComplete={taskComplete}
                            deleteTask={deleteTask}
                            editTask={editTask}></Todo>
                    })
                }
            </ul>
        </div>
    );
}