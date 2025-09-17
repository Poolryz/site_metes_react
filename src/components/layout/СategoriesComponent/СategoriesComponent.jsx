function СategoriesComponent({ setCategory, categorys }) {
    return (
        <>
            {categorys.map((category) => (
                <button
                    className="button-category"
                    onClick={(e) => {
                        setCategory(e.target.innerText)
                    }}
                    key={category}
                >
                    {category}
                </button>
            ))}
        </>
    )
}
export default СategoriesComponent
