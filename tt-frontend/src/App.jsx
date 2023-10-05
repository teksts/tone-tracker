import { useState } from 'react';
import './App.css'
import AudioAnalyzer from './components/AudioAnalyzer';
import ML5PitchDetector from './components/ML5PitchDetector';
import Canvas from './components/Canvas';

function App() {
  const [micInput, setMicInput] = useState(null);
  const [runML5, setRunML5] = useState(false);

  async function getMic() {
    try {
      const mic = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicInput(mic);
    } catch {
      console.error("getUserMedia not supported.")
    }
  }

  function stopMic() {
    micInput.getTracks().forEach(track => track.stop());
    setMicInput(null);
  }

  function toggleMic() {
    if (micInput) {
      stopMic();
    } else {
      getMic();
    }
  }

  function toggleML5() {
    if (runML5) {
      setRunML5(false);
    } else {
      setRunML5(true);
    }
  }

  return (
    <>
      <div className='body'>
        <div>
          <button onClick={toggleMic}>
            {micInput ? "Stop" : "Record"}
          </button>
          <button onClick={toggleML5}>
            {runML5 ? "Stop ML5" : "Run ML5"}
          </button>
          {runML5 && <ML5PitchDetector source={micInput} />}
        </div >
        <Canvas />

      </div>
    </>
  )
}

export default App
