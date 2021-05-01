import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperCheckbox from "./common/SuperCheckbox/SuperCheckbox";
import SuperInputText from "./common/SuperInputText/SuperInputText";
import SuperButton from "./common/SuperButton/SuperButton";
import {HashRouter} from "react-router-dom";
import {Header} from "./common/Header/Header";
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
