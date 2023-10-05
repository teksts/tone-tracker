function SVG(props) {
  const { pitchValues } = props;

  function drawPitchCurve(pitchValues) {
    let x = 100
    let d = `M ${x} ${pitchValues[0]} `;
    for (let i = 1; i < pitchValues.length; i++) {
      x += 1
      d += `L ${x} ${pitchValues[i]} `
    }
    console.log(d)
    return d;
  }


  return (
    <svg viewBox="0 0 1000 1000">
      <rect width="100%" height="50%" fill="lightgrey" />
      <path d={drawPitchCurve(pitchValues)} stroke="red" strokeWidth="2" fill="none"></path>
    </svg>
  )
}

export default SVG;