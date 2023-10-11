import { useEffect, useState } from 'react';
import {useAudio} from 'react-use';

const AudioPlayer = () => {

  const [playing, setPlaying] = useState("/audio/AzaleaTown.mp3")
  const [value, setValue] = useState("")

  // eslint-disable-next-line no-unused-vars
  const [audio, state, controls, ref] = useAudio({
    src: playing,
    autoPlay: false,
  });

  function handleSubmit(event) {
    event.preventDefault()
    controls.play()
  }

  function handleChange(event) {
    setValue(event.target.value)
    console.log(event.target.value)
  }

  useEffect(() => {
    console.log(playing)
  }, [playing])

  useEffect(() => {
    if (value === "Lacunosa"){
      setPlaying("/audio/LacunosaTown.mp3")
    }
    if (value === "Azalea"){
      setPlaying("/audio/AzaleaTown.mp3")
    }
    if (value === "Boutique"){
      setPlaying("/audio/Boutique.mp3")
    }
  }, [value])


  return (
    <div>
      {audio}
      <form onSubmit={handleSubmit} >
        <select name='selectSong' onChange={handleChange}>
          <option value="Azalea">Azalea Town - HGSS</option>
          <option value="Lacunosa">Lacunosa Town - BW</option>
          <option value="Boutique">Boutique - XY</option>
        </select>
        <br/>
        <button type='submit'>Play</button>
      </form>
      <button onClick={controls.pause}>Pause</button>
    </div>
  );
};

export default AudioPlayer