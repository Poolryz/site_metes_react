import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../data.json'
import CardsComponent from '../CardsComponent/CardsComponent'
function CatalogComponent({ category, setCategory, searchProducts }) {
    const params = useParams()
    const categoryType = params.type
    useEffect(() => {
        setCategory(categoryType)
    }, [params])

    return (
        <>
            <div className="cards">
                <CardsComponent
                    products={!category ? data.products : searchProducts}
                />
            </div>
        </>
    )
}
export default CatalogComponent
