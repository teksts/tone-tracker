import useML5Pitch from "../hooks/useML5Pitch";

function ML5PitchDetector(props) {
  const { source } = props;
  const pitchValues = useML5Pitch(source);
  console.log("pitch values:", pitchValues)
  return (
    <>
    </>
  )

}

export default ML5PitchDetector