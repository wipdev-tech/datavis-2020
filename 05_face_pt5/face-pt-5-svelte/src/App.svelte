<script>
  import BgCircle from "./components/BgCircle.svelte";
  import Eye from "./components/Eye.svelte";
  import Mouth from "./components/Mouth.svelte";

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
</script>

<svg {width} {height}>
  <g transform={`translate(${centerX}, ${centerY})`}>
    <BgCircle {centerY} strokeWidth={10} />
    <Eye eyeOffsetX={110} eyeOffsetY={90} eyeR={40} left={true} />
    <Eye eyeOffsetX={110} eyeOffsetY={90} eyeR={40} />
    <Mouth mouthRadius={150} mouthWidth={20} />
  </g>
</svg>
