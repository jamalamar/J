import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Views/Home'
import Work from './Views/Work'
import About from './Views/About'
import Contact from './Views/Contact'

import NavBar from './Components/NavBar.js'


function App () {

  let [title, setTitle] = useState("JINX");


  return (
    <Router>
      <div >

        <NavBar title={title}/>

        <Route path="/" exact component={Home} />
        <Route path="/Work" component={Work} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />

      </div>
    </Router>
  );
}




const style = {
  app: {
    
  }

}



export default App;
