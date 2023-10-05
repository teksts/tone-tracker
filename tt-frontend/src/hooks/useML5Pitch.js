import { useEffect, useRef, useState } from "react";
import GLOBAL from "../constants/global";

function useML5Pitch(stream) {
  const audioContextRef = useRef(null);
  const [pitchValues, setPitchValues] = useState([]);

  // model loading handler required by ML5
  function modelLoadedStatus() {
    console.log("Model loaded!")
  }

  // retrieve pitch value from detector
  async function pitchLoop(pitchDetector) {
    let pitchArr = [];
    // execute only if audio source is active
    if (pitchDetector.stream.active) {
      await pitchDetector.getPitch((err, pitch) => {
        if (err) {
          console.error(err);
        }
        // push value only if frequency detected (no null)
        if (pitch) {
          pitchArr.push(pitch)
        }

      })
      // call recursively to monitor until mic is disabled
      // add value of each sample to output array
      pitchArr = pitchArr.concat(await pitchLoop(pitchDetector));
      console.log(pitchArr)
      return pitchArr
    } else {
      // update state
      return pitchArr
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
      console.log(pitchDetector.audioContext)
      // use a "fetcher" to capture all samples from a single recording
      // this structure is necessary to ensure all asyncronous calls are handled correctly before state update
      const grabPitchArr = async () => {
        const newPitchValues = await pitchLoop(pitchDetector)
        setPitchValues(newPitchValues);
      }

      grabPitchArr();

      // cleanup and teardown context on mic disconnect
      return () => {
        ctx.close();
      }
    }
  }, [stream])

  return pitchValues;
}

export default useML5Pitch;