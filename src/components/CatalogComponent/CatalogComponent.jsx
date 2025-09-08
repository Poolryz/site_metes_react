import img from '../../assets/images/image.png'
import data from '../../data.json'
function CatalogComponent() {
    let products = data.products
    return (
        <>
            <div class="cards">
                {products.map((product) => (
                    <>
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
                    </>
                ))}
            </div>
        </>
    )
}
export default CatalogComponent
