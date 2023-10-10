import {useAudio} from 'react-use';

const Demo = () => {
  const [audio, state, controls, ref] = useAudio({
    src: '/audio/AzaleaTown.mp3',
    autoPlay: false,
  });

  return (
    <div>
      {audio}
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br/>
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br/>
      <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br/>
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div>
  );
};

export default Demo