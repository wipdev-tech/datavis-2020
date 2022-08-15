const App = () => {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const r = centerY - strokeWidth / 2;
  const eyeOffsetX = 120;
  const eyeOffsetY = 90;
  const eyeR = 50;

  return (
    <svg width={width} height={height}>
      <circle
        cx={centerX}
        cy={centerY}
        r={r}
        fill="rgba(255, 230, 0, 1)"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <circle cx={centerX - eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeR} />
      <circle cx={centerX + eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeR} />
    </svg>
  );
};

export default App;
