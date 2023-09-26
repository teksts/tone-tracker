import { useEffect, useState } from "react"

function AudioAnalyzer(props) {
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

return (
  <>
  </>
)
}

export default AudioAnalyzer