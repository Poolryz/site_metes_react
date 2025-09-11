function searchFunction(searchProducts, setSearchProducts, search, products) {
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
export default searchFunction
