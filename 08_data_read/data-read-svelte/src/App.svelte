<script>
  import { csv } from "d3-fetch";

  const csvUrl =
    "https://gist.githubusercontent.com/waseem-medhat/36f70b85ae76e6dc1bec647de6acb3c0/raw/cssColors.csv";
</script>

{#await csv(csvUrl) then _}
  Data is Loaded!!<br />
{/await}
