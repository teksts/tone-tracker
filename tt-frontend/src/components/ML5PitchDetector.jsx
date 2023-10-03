import useML5Pitch from "../hooks/useML5Pitch";

function ML5PitchDetector(props) {
  const { source } = props;
  const pitch = useML5Pitch(source);
  console.log("pitch:", pitch)
  return (
    <>
      <h2>Pitch: {pitch}</h2>
    </>
  )

}

export default ML5PitchDetector