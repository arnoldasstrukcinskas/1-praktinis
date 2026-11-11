import { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

const initialProducts = [
  { id: 1, name: 'Nešiojamas kompiuteris', price: 799.99 },
  { id: 2, name: 'Belaidė pelė', price: 19.5 },
  { id: 3, name: 'Ausinės', price: 45 },
  { id: 4, name: 'Klaviatūra', price: 32.9 },
]

function App() {
  const [products, setProducts] = useState(initialProducts)

  const [cart, setCart] = useState([])

  const handleAdd = (product) => {
    const existing = cart.find((item) => item.id === product.id)

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)

      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <div className="app">
      <h1>Parduotuvė</h1>
      <div className="layout">
        <ProductList products={products} onAdd={handleAdd} />
        <Cart cart={cart} onRemove={handleRemove} />
      </div>
    </div>
  )
}

export default App
