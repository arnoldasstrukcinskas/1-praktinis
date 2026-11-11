import formatPrice from '../utils/formatPrice'

function ProductItem( { product, onAdd }) {
    return ( 
    <div className="product-item">
      <div>
        <strong>{product.name}</strong>
        <p>{formatPrice(product.price)}</p>
      </div>
      <button onClick={() => onAdd(product)}>Pridėti į krepšelį</button>
    </div>
    )
}

export default ProductItem