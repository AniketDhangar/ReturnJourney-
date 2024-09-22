import React from "react";
import "./App.css";
import Searching from "./Components/Searching";
import ItemList from "./Components/ItemList";


function App() {
  return (
    <div className="App">
      <h1>Item List with Search</h1>
      <Searching />
      <ItemList />
    </div>
  );
}

export default App;
