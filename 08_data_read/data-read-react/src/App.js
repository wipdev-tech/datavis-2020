import { useEffect, useState } from "react";
import { csv } from "d3-fetch";

const csvUrl =
  "https://gist.githubusercontent.com/waseem-medhat/36f70b85ae76e6dc1bec647de6acb3c0/raw/cssColors.csv";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return data && <pre>Data is Loaded!!</pre>;
}

export default App;
