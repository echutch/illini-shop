import './Product.css'

function Product({ name, price, stock, description, onAddToCart}) {
    return (
        <div className="product">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Stock: {stock}</p>
            <p>Description: {description}</p>
            <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;