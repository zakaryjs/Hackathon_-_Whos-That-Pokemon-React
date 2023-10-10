import GuessingBar from './GuessingBar';
import Header from './Header';
import Pokemon from './Pokemon';
import PokemonSearch from './PokemonSearch';
import Demo from './Audio';

export default function PokemonParent() {

  return (
    <div>
      {Header}
      <Demo />
      <PokemonSearch />
      <Pokemon />
      <GuessingBar />
    </div>
  );
}
