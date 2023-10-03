import { useEffect, useRef } from "react";

function useML5Pitch(stream) {
  const audioContextRef = useRef(null);
  const pitchRef = useRef(null);
  const path = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/'

  function modelLoadedStatus() {
    console.log("Model loaded!")
  }

  function startPitch(stream, audioContext) {
    console.log("ml5:", ml5);
    const pitch = ml5.pitchDetection(path, audioContext, stream, modelLoadedStatus)
    return pitch;
  }

  function pitchLoop(pitch) {
    pitch.getPitch((err, freq) => {
      if (err) {
        console.error(err);
      }
      console.log(freq);
      pitchRef.current = freq;
    })
    pitchLoop(pitch);
  }

  function getPitch(pitch) {
    pitch.getPitch(function (err, frequency) {
      if (err) {
        console.error(err);
      }
      console.log(frequency);
      pitchRef.current = frequency

      getPitch(pitch);
    })

  }

  useEffect(() => {
    console.log("useEffect executed")
    if (stream) {
      const ctx = new ((window.AudioContext || window.webkitAudioContext))
      audioContextRef.current = ctx;

      const pitch = ml5.pitchDetection(path, audioContextRef.current, stream, modelLoadedStatus);

      getPitch(pitch);

    }
  }, [stream])
  return pitchRef;
}

export default useML5Pitch;