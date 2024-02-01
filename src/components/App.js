import React from "react";
import ShoppingList from "./ShoppingList";
import  { useState } from "react";
import itemData from "../data/items";

function App() {
  const [shade, setShade] = useState(false);
  const toggleMode = () => {
    setShade(shade => !shade);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = shade ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{shade ? "Dark Mode": "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
