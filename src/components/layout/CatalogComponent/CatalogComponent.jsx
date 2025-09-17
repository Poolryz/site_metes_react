import { useEffect, useState } from 'react'
import data from '../../../data.json'
import { searchFunction } from '../../../utils/helpers'
import SearchInput from '../../ui/SearchInput/SearchInput.jsx'
import CardsComponent from '../CardsComponent/CardsComponent'
import СategoriesComponent from '../СategoriesComponent/СategoriesComponent.jsx'
function CatalogComponent({
    categorys,
    category,
    setCategory,
    setSearchProducts,
    searchProducts,
}) {
    let [search, setSearch] = useState('')
    useEffect(() => {
        searchFunction(searchProducts, setSearchProducts, search, data.products)
    }, [search])

    return (
        <>
            <СategoriesComponent
                categorys={categorys}
                setCategory={setCategory}
            />
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
