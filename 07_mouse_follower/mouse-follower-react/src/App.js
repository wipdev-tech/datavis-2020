import { useCallback, useState } from "react";

function App() {
  const width = 960;
  const height = 500;
  const cx = width / 2;
  const cy = height / 2;

  const [mousePos, setMousePos] = useState({ x: cx, y: cy });

  const handleMouseMove = useCallback(({ clientX, clientY }) => {
    setMousePos({ x: clientX, y: clientY });
  });

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle r={40} cx={mousePos.x} cy={mousePos.y}></circle>
    </svg>
  );
}

export default App;
