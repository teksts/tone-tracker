import { useState } from 'react';
import './App.css'

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
        {micInput ? "Record" : "Stop"}
      </button>
    </>
  )
}

export default App
