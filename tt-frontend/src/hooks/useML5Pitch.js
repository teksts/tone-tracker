import { useEffect, useRef, useState } from "react";
import GLOBAL from "../constants/global";

function useML5Pitch(stream) {
  const audioContextRef = useRef(null);
  const [pitch, setPitch] = useState("No pitch detected.");
  
  // model loading handler required by ML5
  function modelLoadedStatus() {
    console.log("Model loaded!")
  }

  // retrieve pitch value from detector
  function pitchLoop(pitchDetector) {
    // execute only if audio source is active
    if (pitchDetector.stream.active) {
      pitchDetector.getPitch((err, pitch) => {
        if (err) {
          console.error(err);
        }
        console.log(pitch);
        // update state
        setPitch(pitch);

        // call recursively to monitor until mic is disabled
        pitchLoop(pitchDetector);
      })
    }
  }

  useEffect(() => {
    // build context and initiate pitch detection only if mic input
    if (stream) {
      const ctx = new ((window.AudioContext || window.webkitAudioContext))
      audioContextRef.current = ctx;
      const pitchDetector = ml5.pitchDetection(
        GLOBAL.PATHS.ML5_MODEL,
        audioContextRef.current,
        stream,
        modelLoadedStatus
      );

      pitchLoop(pitchDetector, setPitch);
      
      // cleanup and teardown context on mic disconnect
      return () => {
        ctx.close();
      }
    }
  }, [stream])

  return pitch;
}

export default useML5Pitch;