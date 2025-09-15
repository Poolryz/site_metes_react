import { useEffect, useState } from 'react'
import data from '../../../data.json'
import { changeCategory, searchFunction } from '../../../utils/helpers'
import SearchInput from '../../ui/SearchInput/SearchInput.jsx'
import CardsComponent from '../CardsComponent/CardsComponent'
function CatalogComponent() {
    let [search, setSearch] = useState('')
    let [searchProducts, setSearchProducts] = useState([])
    let [category, setCategory] = useState('')
    useEffect(() => {
        searchFunction(searchProducts, setSearchProducts, search, data.products)
    }, [search])
    useEffect(() => {
        changeCategory(category, data, setSearchProducts)
    }, [category])

    let categorys = [
        ...new Set(data.products.map((product) => product.category)),
    ]

    return (
        <>
            {categorys.map((category) => (
                <button
                    onClick={(e) => {
                        setCategory(e.target.innerText)
                    }}
                    key={category}
                >
                    {category}
                </button>
            ))}
            <br />
            <SearchInput
                search={search}
                setSearch={setSearch}
            />
            <div className="cards">
                <CardsComponent
                    products={
                        !search && !category ? data.products : searchProducts
                    }
                />
            </div>
        </>
    )
}
export default CatalogComponent
