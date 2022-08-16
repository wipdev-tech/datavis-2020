const Eye = ({ left, eyeOffsetX, eyeOffsetY, eyeR }) => (
  <circle cx={left ? -eyeOffsetX : eyeOffsetX} cy={-eyeOffsetY} r={eyeR} />
);

export default Eye;
