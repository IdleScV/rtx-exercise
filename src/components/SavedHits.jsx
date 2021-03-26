import {connect} from 'react-redux'

function SavedHits ({hits, terms}) {

    return(
        <div className="Saved">
          
            <table id="table">
                <thead>
                    <tr>
                        <th>Saved Stories</th>
                    </tr>
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
            <table id="table">
                <thead>
                    <tr>
                        <th>Previous Search Terms</th>
                    </tr>
                </thead>
                <tbody>
                {
                    terms.map((term, i) => 
                        <tr key={i}>
                            <td>{term}</td>
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
        hits: state.hits,
        terms: state.terms
    }
}

export default connect(mapStateToProps)(SavedHits)