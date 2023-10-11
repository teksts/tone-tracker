import pitchCurve from "../helpers/pitchCurve";

const SVG = (props) => {
  const { pitchValues } = props;
  const { svgPath, bezierCommand, lineCommand, transformCoordinates } = pitchCurve;

  const points = [[50, 100], [100, 400], [400, 300], [600, 50], [900, 450], [1200, 100], [1500, 450], [2000, 100]]

  const coords = transformCoordinates(pitchValues);
  console.log("coords:", coords);

  const dLine = svgPath(coords, lineCommand);
  // const dCurve = svgPath(coords, bezierCommand);

  console.log("min:", Math.min(...pitchValues.map(coord => coord.pitch)));
  console.log("max:", Math.max(...pitchValues.map(coord => coord.pitch)));

  return (
    <svg viewBox="0 0 2000 1000" transform="scale(1, -1)">
      <rect width="100%" height="100%" fill="lightgrey" />
      <path d={dLine} stroke="red" strokeWidth="10" fill="none"></path>
      {/* <path d={dCurve} stroke="red" strokeWidth="2" fill="none"></path> */}
    </svg>
  )
}

export default SVG;