function SearchInput({ search, setSearch }) {
    return (
        <input
            onChange={(e) => {
                return setSearch(e.target.value)
            }}
            className="search"
            value={search}
        />
    )
}
export default SearchInput
