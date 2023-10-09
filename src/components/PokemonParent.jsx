import { useState } from 'react';
import GuessingBar from './GuessingBar';
import Header from './Header';
import Pokemon from './Pokemon';
import PokemonSearch from './PokemonSearch';

export default function PokemonParent() {

    const [guessToCompare, setGuessToCompare] = useState("")

    function handleGuessSubmit(data) {
        setGuessToCompare(data)
    }


  return (
    <div>
      {Header}
      <PokemonSearch />
      <Pokemon />
      <GuessingBar onFormSubmit={handleGuessSubmit}/>
    </div>
  );
}
