<script>
  const width = 960;
  const height = 500;
  let cx = width / 2;
  let cy = height / 2;

  const handleMouseMove = ({ clientX, clientY }) => {
    cx = clientX;
    cy = clientY;
  };
</script>

<svg {width} {height} on:mousemove={handleMouseMove}>
  <circle r="40" {cx} {cy} />
</svg>
