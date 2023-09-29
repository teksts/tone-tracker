import { useState } from 'react';
import './App.css'
import AudioAnalyzer from './components/AudioAnalyzer';

function App() {
  const [micInput, setMicInput] = useState(null);

  const getMic = async () => {
    try {
      const mic = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicInput(mic);
    } catch {
      console.error("getUserMedia not supported.")
    }
  }

  const stopMic = () => {
    micInput.getTracks().forEach(track => track.stop());
    setMicInput(null);
  }

  const toggleMic = () => {
    if (micInput) {
      stopMic();
    } else {
      getMic();
    }
  }

  return (
    <>
      <button onClick={toggleMic}>
        {micInput ? "Stop" : "Record"}
      </button>
      <AudioAnalyzer source={micInput} />
    </>
  )
}

export default App
