import {connect} from 'react-redux'

function SavedHits ({hits}) {
  
    return(
        <div className="Saved">
            <h3>Saved Stories</h3>
            <table id="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
            {
                    hits.map((hit, i) => 
                        <tr key={i} className="hit">
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

const mapStateToProps = (state) => {
    return{
        hits: state
    }
}

export default connect(mapStateToProps)(SavedHits)