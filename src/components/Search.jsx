import {useState} from 'react'

function Search ({handleSearch}){
    const [searchBar, searchBarSet] = useState("")
    const [currentSearchTerm, currentSearchTermSet] = useState(undefined)
    const [currentPage, currentPageSet] = useState(0)

    const handleSearchbarChange = (e) => {
        searchBarSet(e.target.value)
    }

    const handleSearchSubmit = () => {
        currentSearchTermSet(searchBar)
        currentPageSet(0)
        handleSearch(searchBar)
    }

    const handlePages = (int) => {
        currentPageSet(currentPage + int)
        handleSearch(currentSearchTerm + `&page=${currentPage + int}`)
    }

    return(
        <div className="Search">
            <input id="searchbar" placeholder="search here" value={searchBar} onChange={handleSearchbarChange}></input>
            <button onClick={handleSearchSubmit}>Search!</button>
            <div>

            </div>
            {currentSearchTerm &&
                <div>
                    <button disabled={currentPage === 0 } onClick={()=>handlePages(-1)}>Prev</button>
                    <button onClick={()=>handlePages(1)}> Next </button>
                </div>    
            }
        </div>
    )
}

export default Search