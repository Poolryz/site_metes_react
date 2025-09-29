function searchFunction(products, input) {
    if (input.length === 0) {
        return []
    } else {
        let inputLowerCase = input.toLowerCase()
        let filterProducts = products.filter((product) => {
            let nameLower = product.name.toLowerCase()
            return nameLower.includes(inputLowerCase)
        })
        return filterProducts
    }
}
function changeCategory(category, data, setSearchProducts) {
    let array = data.products.filter((product) => product.category == category)
    setSearchProducts(array)
}

export { changeCategory, searchFunction }
