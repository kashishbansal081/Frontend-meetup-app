
const SearchButton = ({searchByTitleAndTag})=>{
     const onSearchHandler = (event)=>{
    const searchValue = event.target.value
    searchByTitleAndTag(searchValue)

  }
    return (
        <> 
            <form className="d-flex my-auto" role="search">
              <div className="input-group h-25 ">
                <span className="input-group-text bg-white border-0 pe-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
                <input
                  className="form-control border-0 shadow-none"
                  type="search"
                  placeholder="Search by title and tags"
                  aria-label="Search"
                  onChange = {onSearchHandler}
                />
              </div>
            </form>
        </>
    )
}

export default SearchButton