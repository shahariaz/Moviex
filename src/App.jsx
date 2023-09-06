import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => console.log(res));
  };

  return <div className="App">App</div>;
}

export default App;
