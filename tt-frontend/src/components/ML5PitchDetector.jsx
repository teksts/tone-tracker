import { useState } from "react";
import useML5Pitch from "../hooks/useML5Pitch";
import SVG from "./SVG";

function ML5PitchDetector(props) {
  const { source } = props;
  const pitchValues = useML5Pitch(source);
  console.log("pitch values:", pitchValues)

  const [drawCurve, setDrawCurve] = useState(false);

  function toggleCurve() {
    if (drawCurve) {
      setDrawCurve(false)
    } else {
      setDrawCurve(true)
    }
  }

  return (
    <>
      <button onClick={toggleCurve}>
        Draw Curve
      </button>
      {drawCurve && <SVG pitchValues={pitchValues}/>}
    </>
  )

}

export default ML5PitchDetector