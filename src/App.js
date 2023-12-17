import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import FileLoader from "./components/FileLoader/FileLoader";
import "./App.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(
    !sessionStorage.getItem("visited")
  );

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 4000);
    }
  }, []);
  return <main>{isLoading ? <FileLoader /> : <Home />}</main>;
};

export default App;
