import './App.css';
import GuessingBar from './components/GuessingBar';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return (
    <div className="App" id='mainApp'>
      {Header}
      <PokemonSearch />
      <Pokemon />
      <GuessingBar />
    </div>
  );
}

export default App;
