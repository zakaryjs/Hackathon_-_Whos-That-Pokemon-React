import GuessingBar from './GuessingBar';
import Header from './Header';
import Pokemon from './Pokemon';
import PokemonSearch from './PokemonSearch';

export default function PokemonParent() {

  return (
    <div>
      {Header}
      <PokemonSearch />
      <Pokemon />
      <GuessingBar />
    </div>
  );
}
