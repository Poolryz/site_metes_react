import { Link } from 'react-router-dom'
import './CardsComponent.scss'
function CardsComponent({ products }) {
    return (
        <div className="cards">
            <div className="cards__body _container">
                <div className="cards__content">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="card-component"
                        >
                            <Link
                                to={`/product/${product.id}`}
                                className="card-component__link"
                            >
                                <div className="card-component__wrapp">
                                    <img
                                        className="card-component__img"
                                        src={product.imageURL}
                                        alt=""
                                    />
                                </div>
                                <div className="card-component__name">
                                    {product.name}
                                </div>
                            </Link>
                            <button className="card-component__button button button_green">
                                Узнать цену
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CardsComponent
