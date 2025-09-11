function searchFunction(searchProducts, setSearchProducts, search, products) {
    if (search.length === 0) {
        return setSearchProducts([])
    }
    let searchLower = search.toLowerCase()
    setSearchProducts((prev) => {
        let array = searchProducts.filter((product) => {
            let nameLower = product.name.toLowerCase()
            return nameLower.includes(searchLower)
        })
        return array
    })
}
function changeCategory(category, data, setSearchProducts) {
    let array = data.products.filter((product) => product.category == category)
    setSearchProducts(array)
}

export { changeCategory, searchFunction }
