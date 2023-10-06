function svgPath(points, command) {
  const d = points.reduce((acc, point, i, arr) => {
    return (
      i === 0
        ? `M ${point.x},${point.y}`
        : `${acc} ${command(point, i, arr)}`
    );

  }
    , '')
  return d;
}

function lineInfo(pointA, pointB) {
  const lengthX = pointB.x - pointA.y;
  const lengthY = pointB.y - pointA.y;
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
}

function controlPoint(current, previous, next, reverse) {
  // short-circuit to handle terminal points
  const p = previous || current
  const n = next || current
  // smoothing ratio
  const smoothing = 0.2;
  // properties of the opposed-line
  const opposed = lineInfo(p, n);
  // add pi to reflect control point if relative to end
  const angle = opposed.angle + (reverse ? Math.PI : 0);
  const length = opposed.length * smoothing;
  // generate coords for control relative to corresponding datapoint
  const x = current.x + Math.cos(angle) * length;
  const y = current.y + Math.sin(angle) * length;
  return { x, y };
}

function bezierCommand(point, i, arr) {
  // start control point
  const startControl = controlPoint(arr[i - 1], arr[i - 2], point)
  // end control point
  const endControl = controlPoint(point, arr[i - 1], arr[i + 1], true)
  return `C ${startControl.x},${startControl.y} ${endControl.x},${endControl.y} ${point.x},${point.y}`
}


function lineCommand(point) {
  return `L ${point.x} ${point.y}`
}

function transformCoordinates(pitchValues) {
  // find the minimum and maximum values in the array
  const minTimestamp = Math.min(...pitchValues.map(coord => coord.timestamp));
  const maxTimestamp = Math.max(...pitchValues.map(coord => coord.timestamp));
  const minPitch = Math.min(...pitchValues.map(coord => coord.pitch));
  const maxPitch = Math.max(...pitchValues.map(coord => coord.pitch));
  
    // set x coordinate scale to fit within the desired range (fit to svg surface) 
    const xScale = 1800 / (maxTimestamp - minTimestamp);
    const yScale = 800 / (maxPitch - minPitch);
  // subtract the minimum value from each timestamp to shift the values
  // scale x coordinates
  const transformedCoordinates = pitchValues.map(coord => ({
    x: (coord.timestamp - minTimestamp + 100) * xScale, // shift and scale x coordinate
    y: (coord.pitch - minPitch + 100) * yScale// 
  }));

  return transformedCoordinates;
}

export default { svgPath, lineInfo, controlPoint, bezierCommand, lineCommand, transformCoordinates }