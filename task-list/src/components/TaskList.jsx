import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const handleAdd = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
        };
        setTasks([...tasks, newTask])
    }

    const handleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: true } : task
            )
        )
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div>
            <TaskForm onAdd={handleAdd} />

            {tasks.length === 0 ? (
                <p className="empty">Užduočių dar nėra.</p>
            ) : (
                <ul className="task-list">
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onComplete={handleComplete}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    )

}

export default TaskList