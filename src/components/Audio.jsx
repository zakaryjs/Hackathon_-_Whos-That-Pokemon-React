import { useState } from 'react';
import {useAudio} from 'react-use';

const Demo = () => {

  const [playing, setPlaying] = useState("/audio/AzaleaTown.mp3")

  // eslint-disable-next-line no-unused-vars
  const [audio, state, controls, ref] = useAudio({
    src: playing,
    autoPlay: false,
  });

  function Lacunosa() {
    setPlaying("/audio/LacunosaTown.mp3")
  }

  function Azalea() {
    setPlaying("/audio/AzaleaTown.mp3")
  }

  return (
    <div>
      {audio}
      <button onClick={Lacunosa}>Set Song: Lacunosa</button>
      <button onClick={Azalea}>Set Song: Azalea</button>
      <br/>
      <button onClick={controls.play}>Play</button>
      <button onClick={controls.pause}>Pause</button>
      <br/>
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Unmute</button>
      <br/>
      <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
    </div>
  );
};

export default Demo