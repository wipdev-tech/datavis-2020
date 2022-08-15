<script>
  import { arc } from "d3-shape";
  import BgCircle from "./components/BgCircle.svelte";

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

  const mouthArcD = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
</script>

<svg {width} {height}>
  <g transform={`translate(${centerX}, ${centerY})`}>
    <BgCircle {r} {strokeWidth} />
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeR} />
    <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeR} />
    <path d={mouthArcD()} />
  </g>
</svg>
