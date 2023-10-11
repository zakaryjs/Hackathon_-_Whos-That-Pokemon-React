import GuessingBar from './GuessingBar';
import Header from './Header';
import Pokemon from './Pokemon';
import PokemonSearch from './PokemonSearch';
import AudioPlayer from './Audio';

export default function PokemonParent() {

  return (
    <div>
      {Header}
      <AudioPlayer />
      <PokemonSearch />
      <Pokemon />
      <GuessingBar />
    </div>
  );
}
