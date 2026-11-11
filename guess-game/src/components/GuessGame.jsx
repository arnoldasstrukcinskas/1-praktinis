import { useState } from 'react'
import GuessForm from './GuessForm'
import Message from './Message'

function GuessGame() {
    const [number] = useState(() => Math.floor(Math.random() * 100) + 1)
    const [input, setInput] = useState('')
    const [attempts, setAttempts] = useState(0)

    const [message, setMessage] = useState(null)
    const [won, setWin] = useState(false)

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const trimmed = input.trim()
        const guess = Number(trimmed)

        if (trimmed === '' || isNaN(Number(guess))) {
            setMessage({ text: 'Įveskite skaičių.', type: 'error' })
            return
        }

        if (!Number.isInteger(guess)) {
            setMessage({ text: 'Skaičius turi būti sveikasis.', type: 'error' })
            return
        }

        if (guess < 1 || guess > 100) {
            setMessage({ text: 'Skaičius turi būti nuo 1 iki 100.', type: 'error' })
        }

        setAttempts(attempts + 1)
        setInput('')

        if (guess === number) {
            setMessage({ text: 'Teisingai', type: 'success' })
            setWin(true)
        } else if (guess > number) {
            setMessage({ text: 'Bandyk maŽesnį', type: 'hint' })
        } else {
            setMessage({ text: 'Bandyk didesnį', type: 'hint' })
        }
    }

    return (
        <div className="game">
            <p>Atspėkite skaičių nuo 1 iki 100.</p>

            <GuessForm
                value={input}
                onChange={handleChange}
                onSubmit={handleSubmit}
                disabled={won}
            />

            {message ? <Message text={message.text} type={message.type} /> : null}

            <p className="attempts">Bandymų skaičius: {attempts}</p>

            {won ? <p className="restart">Norėdami žaisti iš naujo, perkraukite puslapį.</p> : null}
        </div>
    )
}

export default GuessGame