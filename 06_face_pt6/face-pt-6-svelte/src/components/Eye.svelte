<script>
  export let left = false;
  export let eyeOffsetX, eyeOffsetY, eyeR;

  const sign = left ? -1 : 1;
</script>

<circle cx={sign * eyeOffsetX} cy={-eyeOffsetY} r={eyeR} />
