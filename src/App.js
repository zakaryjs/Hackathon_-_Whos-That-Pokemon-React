import { useContext } from 'react';
import './App.css';
import PokemonParent from './components/PokemonParent';
import { ThemeContext } from './contexts/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme} id='mainApp'>
      <PokemonParent />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
