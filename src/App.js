import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Views/Home'
import Work from './Views/Work'
import About from './Views/About'
import Contact from './Views/Contact'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


function App () {

  let [jinx, setJinx] = useState("JINX");
  

  return (
    <Router>
      <div >

        <NavBar jinx={jinx}/>

        <Route path="/" exact component={Home} />
        <Route path="/Work" component={Work} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />

        <Footer />

      </div>
    </Router>
  );
}




const style = {

}



export default App;
