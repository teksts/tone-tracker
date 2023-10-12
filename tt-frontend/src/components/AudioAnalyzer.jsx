import { useEffect, useState } from "react"

const AudioAnalyzer = (props) => {
  const { source } = props;
  const [analyserNode, setAnalyserNode] = useState(null);

  useEffect(() => {
    // build context and audio graph
    if (source) {
      const ctx = new ((window.AudioContext || window.webkitAudioContext))
      const analyser = ctx.createAnalyser();
      const input = ctx.createMediaStreamSource(source);
      input.connect(analyser);

      setAnalyserNode(analyser);

      return () => {
        analyser.disconnect();
        input.disconnect();
      }
    }
  }, [source])
  const sampleAnalyser = () => {
    const analyser = analyserNode;
    const bufferLength = analyser.fftSize;
    let i = 0;
    while (i < 10000000) {
      if (i % 1000 === 0) {
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);
        console.log(dataArray)
      }
      i++;
    }
  }
  return (
    <>
      <button onClick={sampleAnalyser}>
        Sample
      </button>
    </>
  )
}

export default AudioAnalyzer