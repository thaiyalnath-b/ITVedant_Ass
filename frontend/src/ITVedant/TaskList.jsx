import React, { useState } from "react";
import './TaskList.css';

function TaskList() {
    const [tasks, setTasks] = useState([
        { name: 'Design', status: 'done' },
        { name: 'Coding', status: 'done' },
        { name: 'Testing', status: 'not done' },
    ]);

    const toggleStatus = (index) => {
        const updateTasks = tasks.map((task, i) =>
            i === index ? {...task, status: task.status === "done" ? "not done" : "done"} : task
        );
        setTasks(updateTasks);
    };

    return (
        <div className="emp">
            <div className="tasks">
            <h1>Employee Task Management</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <b>{task.name}</b> --- {task.status}
                        <button onClick={() => toggleStatus(index)}>Toggle Status</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default TaskList;