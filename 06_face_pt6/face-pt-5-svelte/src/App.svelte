<script>
  import { range } from "d3-array";
  import Face from "./components/Face.svelte";

  const width = 166;
  const height = 166;

  const ar = range(32);
</script>

{#each ar as n (n)}
  <Face
    {width}
    {height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={10}
    eyeOffsetX={30}
    eyeOffsetY={30}
    eyeR={10}
    mouthRadius={40}
    mouthWidth={10}
  />
{/each}
