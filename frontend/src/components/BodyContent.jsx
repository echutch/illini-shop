import Product from './Product'

const BodyContent = ({ data, onAddToCart}) => (
    <main>
        <div className="product-list">
            {data.map((item, index) => (
                <Product
                key={index}
                name={item.name}
                price={item.price}
                stock={item.stock}
                description={item.description}
                onAddToCart={() => onAddToCart(item.name)}
                />
            ))}
        </div>
    </main>
);

export default BodyContent;