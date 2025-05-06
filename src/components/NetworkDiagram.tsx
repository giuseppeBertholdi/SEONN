
import React, { useEffect, useRef } from 'react';

const NetworkDiagram = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Define nodes
    const nodes = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 12, color: '#000' },
      { x: canvas.width * 0.35, y: canvas.height * 0.15, radius: 8, color: '#000' },
      { x: canvas.width * 0.5, y: canvas.height * 0.4, radius: 15, color: '#000' },
      { x: canvas.width * 0.6, y: canvas.height * 0.2, radius: 10, color: '#000' },
      { x: canvas.width * 0.75, y: canvas.height * 0.3, radius: 12, color: '#000' },
      { x: canvas.width * 0.4, y: canvas.height * 0.6, radius: 9, color: '#000' },
      { x: canvas.width * 0.65, y: canvas.height * 0.7, radius: 11, color: '#000' },
      { x: canvas.width * 0.8, y: canvas.height * 0.6, radius: 8, color: '#000' }
    ];
    
    // Define connections between nodes
    const connections = [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 0, to: 5 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 4 },
      { from: 4, to: 7 },
      { from: 5, to: 6 },
      { from: 6, to: 7 }
    ];
    
    // Animation variables
    let animationFrame: number;
    let pulsePhase = 0;
    
    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update pulse phase
      pulsePhase += 0.02;
      
      // Draw connections
      connections.forEach(connection => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        // Calculate distance for pulse animation
        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = '#E6E6E6';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw pulse along connection
        const pulseOffset = (pulsePhase + connection.from * 0.2) % 1;
        const pulseX = fromNode.x + dx * pulseOffset;
        const pulseY = fromNode.y + dy * pulseOffset;
        
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#000';
        ctx.fill();
      });
      
      // Draw nodes
      nodes.forEach((node, index) => {
        // Node pulse animation
        const pulse = Math.sin(pulsePhase + index * 0.5) * 0.2 + 0.8;
        const displayRadius = node.radius * pulse;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, displayRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Draw a white circle inside the node for contrast
        ctx.beginPath();
        ctx.arc(node.x, node.y, displayRadius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF';
        ctx.fill();
      });
      
      // Continue animation loop
      animationFrame = requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div className="w-full h-64 md:h-80 relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      <style>
        {`
          canvas {
            background-color: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default NetworkDiagram;
