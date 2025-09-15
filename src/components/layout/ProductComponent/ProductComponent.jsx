function ProductComponent({ product }) {
    return (
        <>
            <img
                src={product.imageURL}
                alt=""
            />
            <ul>
                {Object.entries(product).map(([param, val]) => (
                    <h2 key={param}>
                        {param}:{val}
                    </h2>
                ))}
            </ul>
        </>
    )
}
export default ProductComponent
