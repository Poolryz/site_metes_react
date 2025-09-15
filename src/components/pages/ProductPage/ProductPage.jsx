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
            <ProductComponent product={product} />
        </>
    )
}
export default ProductPage
