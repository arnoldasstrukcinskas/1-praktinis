import formatPrice from '../utils/formatPrice'

function Cart({ cart, onRemove }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
      <section className="cart">
        <h2>Krepšelis</h2>

        {cart.length === 0 ? (
            <p className="empty">Krepšelis tuščias.</p>
        ) : (
            <ul className="cart-list">
            {cart.map((item) => (
                <li key={item.id} className="cart-item">
                <div>
                    <strong>{item.name}</strong>
                    <p>Vieneto kaina: {formatPrice(item.price)}</p>
                    <p>Kiekis: {item.quantity}</p>
                    <p>Suma: {formatPrice(item.price * item.quantity)}</p>
                </div>
                <button className="remove" onClick={() => onRemove(item.id)}>
                    Pašalinti iš krepšelio
                </button>
                </li>
            ))}
            </ul>
        )}

        <p className="total">Bendra kaina: {formatPrice(total)}</p>
    </section>
    )
}

export default Cart