import { Link } from 'react-router-dom'
function CardsComponent({ products }) {
    return (
        <div className="cards">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="card-component"
                >
                    <Link
                        to={`/product/${product.id}`}
                        className="card-component__link"
                    >
                        <img
                            className="card-component__img"
                            src={product.imageURL}
                            alt=""
                        />
                        <div className="card-component__name">
                            {product.name}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default CardsComponent
