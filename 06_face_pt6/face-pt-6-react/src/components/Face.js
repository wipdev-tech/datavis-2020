import FaceContainer from "./FaceContainer";
import BgCircle from "./BgCircle";
import Eye from "./Eye";
import Mouth from "./Mouth";

const Face = ({
  width,
  height,
  centerX,
  centerY,
  eyeOffsetX,
  eyeOffsetY,
  eyeR,
  mouthRadius,
  mouthWidth,
}) => (
  <FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
  >
    <BgCircle centerY={centerY} strokeWidth={10} />
    <Eye
      left={true}
      eyeOffsetX={eyeOffsetX}
      eyeOffsetY={eyeOffsetY}
      eyeR={eyeR}
    />
    <Eye
      left={false}
      eyeOffsetX={eyeOffsetX}
      eyeOffsetY={eyeOffsetY}
      eyeR={eyeR}
    />
    <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
  </FaceContainer>
);

export default Face;
