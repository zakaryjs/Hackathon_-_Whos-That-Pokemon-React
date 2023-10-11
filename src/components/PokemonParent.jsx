import GuessingBar from './GuessingBar';
import Header from './Header';
import Pokemon from './Pokemon';
import PokemonSearch from './PokemonSearch';
import AudioPlayer from './Audio';
import ThemeSwitcher from './ThemeSwitcher';
import { useState } from 'react';

export default function PokemonParent() {

  const [loading, setLoading] = useState(false)

  return (
    <div>
      {Header}
      <AudioPlayer />
      <ThemeSwitcher />
      <PokemonSearch setLoading={setLoading}/>
      <Pokemon loading={loading}/>
      <GuessingBar />
    </div>
  );
}
