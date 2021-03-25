import {useState} from 'react'
import './App.css';
import Results from './components/Results'
import Search from './components/Search'
import SavedHits from './components/SavedHits'
function App() {
  const [result, resultSet] = useState(undefined)
  const [showSavedHits, showSavedHitsSet] = useState(false)
  const handleSearch = (query) => {
    fetch("http://hn.algolia.com/api/v1/search?query=" + query)
      .then(res => res.json())
      .then(json => {
        resultSet(json)
      })
  }


  return (
    <div className="App">
      <div className="Header">
        <h2 id="title">HN Search</h2>
        <button onClick={()=>showSavedHitsSet(!showSavedHits)}>{!showSavedHits ? "Show Your Saved Hits" : "Hide Your Saved Hits"}</button>
      </div>
      <Search handleSearch={handleSearch}/>
      <div className="Hits">
        {result && <Results result={result}/>}
        {showSavedHits && <SavedHits/>}
      </div>
    </div>
  );
}

export default App;
