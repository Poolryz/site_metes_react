import { useLocation } from 'react-router-dom'
import data from '../../../data.json'

function ProductPage({ props }) {
    const id = useLocation().pathname.slice(1)
    let product = data.products.filter((product) => product.id === id)[0]

    return (
        <>
            <img
                src={product.imageURL}
                alt=""
            />
            <ul>
                {Object.entries(product).map(([key, val]) => (
                    <h2 key={product.id}>
                        {key}:{val}
                    </h2>
                ))}
            </ul>
        </>
    )
}
export default ProductPage
