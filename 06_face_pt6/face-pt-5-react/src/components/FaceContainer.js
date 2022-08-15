const FaceContainer = ({ width, height, centerX, centerY, children }) => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
  </svg>
);

export default FaceContainer;
