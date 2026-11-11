function TaskItem({ task, onComplete, onDelete }) {
    return (
        <li className={task.completed ? 'task-item completed' : 'task-item'}>
            <span>{task.id}</span>
            <span className="task-text">{task.text}</span>

            {task.completed && <span className="done-label">Atlikta</span>}

            <div className="task-buttons">
                <button
                    disabled={task.completed}
                    onClick={() => onComplete(task.id)}
                >
                    Pažymėti kaip atliktą
                </button>
                <button className="delete" onClick={() => onDelete(task.id)}>
                    Ištrinti
                </button>
            </div>
        </li>
    )
}

export default TaskItem