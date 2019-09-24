import React, { useState } from 'react';

import NavBar from './Components/NavBar.js'


function App () {

  let [title, setTitle] = useState("JINX");


  return (
    <div >
      <NavBar title={title}/>
      <h2 style={style.header}>Your idea... we make it real.</h2>
    </div>
  );
}




const style = {
  app: {
    
  },

  header: {
    fontSize: '50px',
    padding: '25px',
    textAlign: 'center',
  },

}



export default App;
