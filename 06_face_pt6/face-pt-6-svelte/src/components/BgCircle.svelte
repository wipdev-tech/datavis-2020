<script>
  export let centerY, strokeWidth;

  const r = centerY - strokeWidth / 2;
</script>

<circle
  {r}
  fill="rgba(255, 230, 0, 1)"
  stroke="black"
  stroke-width={strokeWidth}
/>
