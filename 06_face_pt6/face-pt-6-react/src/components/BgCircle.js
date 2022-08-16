const BgCircle = ({ centerY, strokeWidth }) => (
  <circle
    r={centerY - strokeWidth / 2}
    fill="rgba(255, 230, 0, 1)"
    stroke="black"
    strokeWidth={strokeWidth}
  />
);

export default BgCircle;
