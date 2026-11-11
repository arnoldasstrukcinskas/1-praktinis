function GuessForm({ value, onChange, onSubmit, disabled }) {
    return (
        <form className="guess-form" onSubmit={onSubmit}>
            <input
                type="text"
                inputMode="numeric"
                placeholder="Jūsų spėjimas"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            <button type="submit" disabled={disabled}>
                Spėti
            </button>
            </form>
            )
}

export default GuessForm