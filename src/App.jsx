import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;
