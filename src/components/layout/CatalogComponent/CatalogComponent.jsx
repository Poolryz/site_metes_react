import { useEffect, useState } from 'react'
import data from '../../../data.json'
import searchFunction from '../../../utils/helpers'
import SearchInput from '../../ui/SearchInput/SearchInput.jsx'
import CardComponent from '../CardComponent/CardComponent'
function CatalogComponent() {
    let [search, setSearch] = useState('')
    let [searchProducts, setSearchProducts] = useState([])
    useEffect(() => {
        searchFunction(searchProducts, setSearchProducts, search, data.products)
    }, [search])

    return (
        <>
            <SearchInput
                search={search}
                setSearch={setSearch}
            />
            <div className="cards">
                <CardComponent
                    products={!search ? data.products : searchProducts}
                />
            </div>
        </>
    )
}
export default CatalogComponent
