import React, {useState} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function Home () {
	return(
	<div>
	
		<Jumbotron style={style.header}>
		  <h1 style={style.h1}>Your idea... We make it real!</h1>
		  <p>
		    This is a simple hero unit, a simple jumbotron-style component for calling
		    extra attention to featured content or information.
		  </p>
		  <p>
		    <Button variant="primary">Learn more</Button>
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
    textAlign: 'center',
    fontWeight: '102',
	lineHeight: '2',
	padding: '15%',
	fontSize: '30px',
  },

  h1: {
  	fontSize: '60px',
  },
}

export default Home;