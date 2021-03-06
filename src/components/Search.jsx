import {useState} from 'react'
import {connect} from 'react-redux'

function Search ({handleSearch, dispatch}){
    const [searchBar, searchBarSet] = useState("")
    const [currentSearchTerm, currentSearchTermSet] = useState(undefined)
    const [currentPage, currentPageSet] = useState(0)

    const handleSearchbarChange = (e) => {
        searchBarSet(e.target.value)
    }

    const handleSearchSubmit = () => {
        let payload = searchBar
        dispatch({type: "ADD_TERM", payload})
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

const mapDispatchToProps = (dispatch) => {
    return{
        handleTermSave: (term) => dispatch({type: "ADD_TERM", payload: term})
    }
}

export default connect(mapDispatchToProps)(Search)
