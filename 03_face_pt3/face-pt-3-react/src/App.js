import { arc } from "d3-shape";

const App = () => {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const r = centerY - strokeWidth / 2;
  const eyeOffsetX = 110;
  const eyeOffsetY = 90;
  const eyeR = 40;
  const mouthWidth = 20;
  const mouthRadius = 150;

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={r}
          fill="rgba(255, 230, 0, 1)"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeR} />
        <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeR} />
        <path d={mouthArc()} stroke="black" fill="black" />
      </g>
    </svg>
  );
};

export default App;
