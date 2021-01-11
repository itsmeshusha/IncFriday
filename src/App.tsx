import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import {HashRouter} from "react-router-dom";
import {Header} from "./Header";
import {Routes} from "./Routes";

function App() {
  return (
    <div className="App">
        <HashRouter>
        <Header />
        <Routes />

        </HashRouter>
    </div>
  );
}

export default App;
