import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import SuperButton from "./common/c2-SuperButton/SuperButton";

function App() {
  return (
    <div className="App">
      <SuperCheckbox />
      <SuperInputText  />
      <SuperButton>Button</SuperButton>
    </div>
  );
}

export default App;
