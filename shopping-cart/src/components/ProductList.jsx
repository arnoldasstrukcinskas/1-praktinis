import ProductItem from './ProductItem'

function ProductList({ products, onAdd }) {
    return ( 
        <section className="products">
            <h2>Prekės</h2>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} onAdd={onAdd} />
            ))}
        </section>
        )
}

export default ProductList