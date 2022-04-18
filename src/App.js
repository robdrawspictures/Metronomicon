import React, {useState} from 'react';
import Assets from './components/Assets';
import './App.css';

function App() {

  const [bpm, setBPM] = useState(1000);
  const [sound, setSound] = useState(Assets.Sounds.Snare);
  const [mute, setMute] = useState(false);

  const beep = () => {
    sound.play();
  }

  const handleStop = () => {
    sound.pause();
    sound.currentTime = 0;
    setMute(true);
  }

  const metronome = (value) => {
    if(mute == false){
    setInterval(beep, value);
    console.log('beep beep')
    }
  }

  const handleBPMChange = (event) => {
    let bpm = event.target.value;
    let algo = 60000 / bpm;
    setBPM(algo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBPM = bpm;
    setBPM(newBPM);
    metronome(bpm);
  }


  return (
    <>
    <marquee behavior="scroll" direction="right">
        <img src={`${process.env.PUBLIC_URL}/nyan_cat.png`} alt="is cat"/>
    </marquee>
    <div id="metro-container">
    <h1>Metronomicon</h1>
    <button onClick={beep}><img src={`${process.env.PUBLIC_URL}/doge_transparent.png`} width="250" alt="bonk"/></button>

    <p>Metronome settings:</p>

    <div>
      <input type="range" id="bpm" name="bpm"
            min="0" max="320" onChange={setBPM}/>
      <label htmlFor="bpm">BPM</label>
    </div>

    <div>
      <input type="range" id="Volume" name="Volume" 
            min="0" max="100" step="10"/>
      <label htmlFor="Volume">Volume</label>
    </div>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleBPMChange}/>
    <input type="submit" value="Post"/>
    </form>
    <button onClick={metronome}>Metronome</button>
    <button onClick={handleStop}>STOP</button>
    </div>
    </>
  );
}

export default App;
