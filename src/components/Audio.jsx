import { useEffect, useState } from 'react';
import {useAudio} from 'react-use';
import '../styles/Audio.css'

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
    if (state.paused) {
      controls.play()
    } else {
      controls.pause()
    }
  }

  function handleChange(event) {
    setValue(event.target.value)
    console.log(event.target.value)
  }

  function handleClick(event) {
    event.preventDefault()
    if (state.volume === 1) {
      controls.volume(0.2)
    } else if (state.volume === 0.2) {
      controls.volume(0.5)
    } else if (state.volume === 0.5) {
      controls.volume(1)
    }
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
        <h3>Music Selector:</h3>
        <select name='selectSong' onChange={handleChange}>
          <option value="Azalea">Azalea Town - HGSS</option>
          <option value="Lacunosa">Lacunosa Town - BW</option>
          <option value="Boutique">Boutique - XY</option>
        </select>
        <br/>
        <br/>
        <button type='submit'>{state.paused ? "Play" : "Pause"}</button>
        <br/>
        <h3>Current volume: {state.volume === 0.2 ? <u>20%</u> : state.volume === 0.5 ? <u>50%</u> : state.volume === 1 ? <u>100%</u> : "error"}</h3>
        <button onClick={handleClick}>{state.volume === 1 ? "Set volume to 20%" : state.volume === 0.2 ? "Set volume to 50%" : state.volume === 0.5 ? "Set volume to 100%" : "error"}</button>
      </form>
    </div>
  );
};

export default AudioPlayer