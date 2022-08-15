<script>
  export let width, height, centerX, centerY;
</script>

<svg {width} {height}>
  <g transform={`translate(${centerX}, ${centerY})`}>
    <slot />
  </g>
</svg>
