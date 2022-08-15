import Eye from "./components/Eye";
import BgCircle from "./components/BgCircle";
import Mouth from "./components/Mouth";

const App = () => {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <BgCircle centerY={centerY} strokeWidth={10} />
        <Eye left={true} eyeOffsetX={110} eyeOffsetY={90} eyeR={40} />
        <Eye left={false} eyeOffsetX={110} eyeOffsetY={90} eyeR={40} />
        <Mouth mouthRadius={150} mouthWidth={20} />
      </g>
    </svg>
  );
};

export default App;
