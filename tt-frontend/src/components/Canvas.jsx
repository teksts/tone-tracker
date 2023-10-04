
import { useRef, useEffect } from 'react'

function Canvas(props) {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = '#F5F5F5'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])
  
  return <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid red' }} {... props}/>
}

export default Canvas