import './App.css';
import Header from './components/Header';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return (
    <div className="App" id='mainApp'>
      {Header}
      <PokemonSearch />
    </div>
  );
}

export default App;
