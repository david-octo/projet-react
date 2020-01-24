import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(setBeers)
  }, [])

console.log(beers)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {beers.map(beer => <li key={beer.id}><img src={beer.image_url} alt="{beer.name} image" width="8%" height="8%"/> {beer.name} ({beer.tagline})</li>
            )}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
