import { useState } from 'react';

function TaskForm({ onAdd }) {

    const [text, setText] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const trimmedText = text.trim()

        if (trimmedText === '') {
            setError('Įveskite užduoties tekstą')
            return ``
        }

        onAdd(trimmedText)
        setText('')
        setError('')
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="task-form-row">
                <input
                    type="text"
                    placeholder="Nauja užduotis..."
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button type="submit">Pridėti užduotį</button>
            </div>
            {error ? <p className="error">{error}</p> : null}
        </form>
    )
}

export default TaskForm