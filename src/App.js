import './App.css';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return (
    <div className="App" id='mainApp'>
      {Header}
      <PokemonSearch />
      <Pokemon />
    </div>
  );
}

export default App;
