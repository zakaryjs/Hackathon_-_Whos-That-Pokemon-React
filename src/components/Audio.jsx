import { useEffect, useState } from 'react';
import {useAudio} from 'react-use';

const Demo = () => {

  const [playing, setPlaying] = useState("/audio/AzaleaTown.mp3")
  const [value, setValue] = useState("")

  // eslint-disable-next-line no-unused-vars
  const [audio, state, controls, ref] = useAudio({
    src: playing,
    autoPlay: false,
  });

  function handleSubmit(event) {
    event.preventDefault()
    if (value === "Azalea") {
      setPlaying("/audio/AzaleaTown.mp3")
    } else if (value === "Lacunosa") {
      setPlaying("/audio/LacunosaTown.mp3")
      console.log('play set lacunosa')
      controls.play()
    }
    controls.play()
  }

  function handleChange(event) {
    setValue(event.target.value)
    console.log(event.target.value)
  }

  useEffect(() => {
    console.log(value)
  }, [value])


  return (
    <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <form onSubmit={handleSubmit} >
        <select name='selectSong' onChange={handleChange}>
          <option value="Azalea">Azalea Town</option>
          <option value="Lacunosa">Lacunosa Town</option>
        </select>
        <button type='submit'>Play</button>
      </form>
    </div>
  );
};

export default Demo