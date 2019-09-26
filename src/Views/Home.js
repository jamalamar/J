import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function Home () {
	return(
	<div>
	
		<Jumbotron style={style.header}>
		  <h1 style={style.h1}>Your idea... We make it real!</h1>
		  <p>
		    We are a digital product studio that transforms product ideas 
		    into incredible products
		  </p>
		  <p>
		    <Button variant="primary" as={Link} to='/Contact'>Let's Talk</Button>
		  </p>
		</Jumbotron>
		
	</div>
	)
}

const bgImage = '../Assets/Header-Image.jpg'

const style = {
  header: {
    backgroundImage: 'url(/Assets/Header-Image.jpg)',
    height: '600px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#cccccc',
    textAlign: 'center',
    fontWeight: '102',
	lineHeight: '2',
	padding: '15%',
	fontSize: '25px',
  },

  h1: {
  	fontSize: '60px',
  },
}

export default Home;