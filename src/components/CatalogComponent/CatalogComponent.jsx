import { useState } from 'react'
import data from '../../data.json'
import CardComponent from '../CardComponent/CardComponent'
function CatalogComponent() {
    let [search, setSearch] = useState('')
    let [productSearch, setProductSearch] = useState([])
    let products = data.products
    let array = []

    function searchFunction() {
        if (search.length === 0) {
            return
        }
        products.filter((product) => {
            let nameLower = product.name.toLowerCase()
            let searchLower = search.toLowerCase()
            if (nameLower.includes(searchLower)) {
                array.push(product)
                setProductSearch(array)
            }
        })
        console.log(productSearch)
    }
    return (
        <>
            <div>{search}</div>
            <div className="search">
                <input
                    onChange={(e) => {
                        return (setSearch(e.target.value), searchFunction())
                    }}
                    className="search"
                    value={search}
                />
            </div>
            <div className="cards">
                <CardComponent
                    products={
                        productSearch.length === 0 ? products : productSearch
                    }
                />
            </div>
        </>
    )
}
export default CatalogComponent
