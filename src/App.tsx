import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleMap from "./components/Map";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="split-screen">
        <SearchBar />
        <SimpleMap />
      </div>
    </div>
  );
}

export default App;
