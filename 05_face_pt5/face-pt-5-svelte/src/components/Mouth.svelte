<script>
  import { arc } from "d3-shape";

  export let mouthRadius, mouthWidth;

  const mouthArcD = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
</script>

<path d={mouthArcD()} />
