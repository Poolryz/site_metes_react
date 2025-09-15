import { useLocation } from 'react-router-dom'
import data from '../../../data.json'
import ProductComponent from '../../layout/ProductComponent/ProductComponent.jsx'

function ProductPage({ props }) {
    const id = useLocation().pathname.slice(9)

    let product = data.products.filter((product) => product.id === id)[0]
    function addAppProduct(id) {
        if (localStorage.getItem(id) === 'true') {
            localStorage.removeItem(id)
        } else {
            localStorage.setItem(id, 'true')
        }
        console.log(localStorage)
    }

    return (
        <>
<<<<<<< HEAD
            <ProductComponent product={product} />
=======
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
            <button onClick={() => addAppProduct(id)}>Добавить в заявку</button>
>>>>>>> 97823aabbd8939ce72f27f1f79deccee1aee74b0
        </>
    )
}
export default ProductPage
