import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function Home () {
	return(
	<div>
	
		<Jumbotron style={style.header}>
		  <h1 style={style.JumboTitle}>Your idea... We make it real</h1>
		  <p style={style.JumboBody}>
		    We are a digital product studio that transforms product ideas 
		    into incredible products
		  </p>
		  <p>
		    <Button as={Link} to='/Contact' variant="dark" >Let's Talk</Button>
		  </p>
		</Jumbotron>
		
	</div>
	)
}

const bgImage = '../Assets/Header-Image.jpg'

const style = {
  header: {
    backgroundImage: 'url(/Assets/Header-Image.jpg)',
    height: '650px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#cccccc',
    textAlign: 'center',
    fontWeight: '160',
	padding: '15%',
	fontSize: '25px',
  },

  JumboTitle: {
  	fontSize: '60px',
  	margin: '0em 0em 2em 0em'
  },
  JumboBody: {
  	backgroundColor: 'rgba(0,0,0,0.6)',
  	borderRadius: '2px',
  	color: '#fff'
  }
}

export default Home;