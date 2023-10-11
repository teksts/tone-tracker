
import { useRef, useEffect } from 'react'

const Canvas = (props) => {

  const canvasRef = useRef(null)

  const canvasStyle = {
    border: '1px solid red'
  }


  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const drawBackground = () => {
      ctx.lineWidth = 1;
      
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const lineSpacing = 0.2 * canvas.height; // 20vh units vertically

      // Draw horizontal lines
      for (let i = lineSpacing; i < canvas.height; i += lineSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
      }
    };

    drawBackground();
  }, [])

return <canvas ref={canvasRef} width={1000} height={800} style={canvasStyle} {...props} />
}

export default Canvas