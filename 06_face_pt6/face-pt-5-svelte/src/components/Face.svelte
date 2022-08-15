<script>
  import FaceContainer from "./FaceContainer.svelte";
  import BgCircle from "./BgCircle.svelte";
  import Eye from "./Eye.svelte";
  import Mouth from "./Mouth.svelte";

  export let width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeR,
    mouthRadius,
    mouthWidth;
</script>

<FaceContainer {width} {height} {centerX} {centerY}>
  <BgCircle {centerY} {strokeWidth} />
  <Eye {eyeOffsetX} {eyeOffsetY} {eyeR} left={true} />
  <Eye {eyeOffsetX} {eyeOffsetY} {eyeR} />
  <Mouth {mouthRadius} {mouthWidth} />
</FaceContainer>
