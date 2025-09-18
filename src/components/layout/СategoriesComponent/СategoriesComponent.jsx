function СategoriesComponent({ catalogMenu, setCategory, categorys }) {
    return (
        <div className={catalogMenu ? 'category-menu_active' : 'category-menu'}>
            {categorys.map((category) => (
                <button
                    className="category-menu__button"
                    onClick={(e) => {
                        setCategory(e.target.innerText)
                    }}
                    key={category}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}
export default СategoriesComponent
