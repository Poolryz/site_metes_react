import { Link } from 'react-router-dom'
import img from '../../../assets/images/image.png'
function CardsComponent({ products }) {
    return (
        <>
            {products.map((product) => (
                <Link
                    to={product.id}
                    key={product.id}
                    className="card"
                >
                    <img
                        className="card__img"
                        src={img}
                        alt=""
                    />
                    <div className="card__name">{product.name}</div>
                </Link>
            ))}
        </>
    )
}
export default CardsComponent
