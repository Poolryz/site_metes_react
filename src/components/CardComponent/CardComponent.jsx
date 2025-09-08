import img from '../../assets/images/image.png'
function CardComponent({ products }) {
    return (
        <>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="card"
                >
                    <img
                        className="card__img"
                        src={img}
                        alt=""
                    />
                    <div className="card__name">{product.name}</div>
                </div>
            ))}
        </>
    )
}
export default CardComponent
