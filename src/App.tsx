import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "./common/Header/Header";
import {Routes} from "./Routes";
import {Initialize} from "./common/Initialize/Initialize";
import {Loader} from "./common/Loader/Loader";

function App() {
  return (
    <div className="App">
        <HashRouter>
        <Header />
        <Routes />
            {/*<Initialize />*/}
            {/*<Loader />*/}
        </HashRouter>
    </div>
  );
}

export default App;
