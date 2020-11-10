import logo from './assets/p1.png';

import './App.css';

function App() {
    return (
        <div className="App" >
            <header className="App-header" >
                <img src={logo}
                    className="App-logo"
                    alt="logo" />
                <p><code> Pokedex in progress </code></p>
                <a className="App-link"
                    href="https://pokeapi.co/"
                    target="_blank"
                    rel="noopener noreferrer" >
                    PokeApi </a>
            </header>
            <footer className="App-footer">
                <h4>Code by Gabriel Maso</h4>
            </footer>
        </div>
    );
}

export default App;