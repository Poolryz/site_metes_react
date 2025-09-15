import { Link } from 'react-router-dom'
import img from '../../../assets/images/image.png'
function CardsComponent({ products }) {
    return (
        <div className="cards">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="card-component"
                >
                    <Link
                        to={product.id}
                        className="card-component__link"
                    >
                        <img
                            className="card-component__img"
                            src={img}
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
