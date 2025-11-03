import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Extensions from "./Components/Extensions/Extensions";
function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="container">
      <Header theme={theme} onToggleTheme={toggleTheme}></Header>
      <Extensions></Extensions>
    </div>
  );
}

export default App;
