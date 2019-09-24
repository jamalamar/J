import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App () {

  let [clock, setClock] = useState("JINX");


  return (
    <div className="App">
        <h1>{clock}</h1>

    </div>
  );
}

export default App;
