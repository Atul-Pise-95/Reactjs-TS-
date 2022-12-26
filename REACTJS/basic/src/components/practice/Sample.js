import { useEffect } from "react";

function App() {
  //   const [state, setState] = useState(0);

  useEffect(() => {
    console.log("comonent is mounted");
  }, []);

  return (
    <div className="App">
      <h1> Hello</h1>
    </div>
  );
}
export default App;
