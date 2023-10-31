import React, { useEffect, useRef } from 'react';
import './game.css';

const Game = () => {
  const canvasRef = useRef(null);
  const cubeSize = 50;
  let cubeX = 0;
  let cubeY = 0;
  const keys = {}; // Object to keep track of pressed keys

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleKeyDown = (e) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e) => {
      keys[e.key] = false;
    };

    const drawGame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw grass field
      ctx.fillStyle = '#00FF00'; // Green color for grass
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Handle continuous motion
      if (keys['a'] && cubeX > 0) cubeX -= 5;
      if (keys['d'] && cubeX < canvas.width - cubeSize) cubeX += 5;
      if (keys['w'] && cubeY > 0) cubeY -= 5;
      if (keys['s'] && cubeY < canvas.height - cubeSize) cubeY += 5;

      // Draw cube
      ctx.fillStyle = '#0000FF'; // Blue color for cube
      ctx.fillRect(cubeX, cubeY, cubeSize, cubeSize);

      animationFrameId = requestAnimationFrame(drawGame);
    };

    // Set canvas dimensions based on window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    drawGame();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [keys]);

  return <canvas ref={canvasRef} className="game-canvas" />;
};

export default Game;
