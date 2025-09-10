import { useEffect, useState } from 'react'
import data from '../../data.json'
import CardComponent from '../CardComponent/CardComponent'
function CatalogComponent() {
    let [search, setSearch] = useState('')
    let [searchProducts, setSearchProducts] = useState([])
    useEffect(() => {
        searchFunction()
    }, [search])
    let products = data.products

    function searchFunction() {
        if (search.length === 0) {
            return setSearchProducts([])
        }
        let searchLower = search.toLowerCase()
        setSearchProducts((prev) => {
            let array = products.filter((product) => {
                let nameLower = product.name.toLowerCase()
                return nameLower.includes(searchLower)
            })
            return array
        })
    }
    return (
        <>
            <div>{search}</div>
            <div className="search">
                <input
                    onChange={(e) => {
                        return setSearch(e.target.value)
                    }}
                    className="search"
                    value={search}
                />
            </div>
            <div className="cards">
                <CardComponent products={!search ? products : searchProducts} />
            </div>
        </>
    )
}
export default CatalogComponent
