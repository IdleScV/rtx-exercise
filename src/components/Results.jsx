import {connect} from 'react-redux'

function Results ({result, dispatch}){

    const handleUserSave = (hit) => {
        let payload = hit
        dispatch({type: "ADD", payload})
    }

    return(
        <div className="Results">
            <h3>Current Search {`${result.page} / ${result.nbPages}`}</h3>
            <table id="table">
                <thead>
                    <tr>
                        <th>Save</th>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    result.hits.map((hit, i) => 
                        <tr key={i} className="hit">
                            <td><button onClick={()=>handleUserSave(hit)}>+</button></td>
                            <td>
                                
                                <a href={hit.url} target="_blank" rel="noreferrer">{hit.title}</a>
                            </td>
                            {/* Convert to us date & time */}
                            <td>{new Date(hit.created_at_i * 1000).toLocaleDateString("en-US")}</td>
                            
                        </tr>
                        )
                }
            </tbody>
           </table>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleUserSave: (hit) => dispatch({type: "ADD", payload: hit})
    }
}


export default connect(mapDispatchToProps)(Results)