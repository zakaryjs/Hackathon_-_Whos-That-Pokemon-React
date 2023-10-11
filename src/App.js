import { useContext } from 'react';
import './App.css';
import PokemonParent from './components/PokemonParent';
import { ThemeContext } from './contexts/ThemeContext';

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme} id='mainApp'>
      <PokemonParent />
    </div>
  );
}

export default App;
