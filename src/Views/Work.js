import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Work () {
	return(
		<div>

			<Jumbotron fluid style={style.header}>
			  <Container>
			    <h1 style={style.title}>We Help Build Incredible Products</h1>
			    <p>
			      
			    </p>
			    <Button as={Link} to='/Contact' variant="dark" >Contact</Button>
			  </Container>
			</Jumbotron>

			<div id="body" style={style.body}>
				
			</div>
		
		</div>
	)
}

const style = {
	header: {
	    fontSize: '',
	    backgroundImage: 'url(/Assets/Work-Header.jpg)',
	    backgroundPosition: 'center',
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
	    padding: '25px',
	    textAlign: 'center',
	    padding: '6em 0em 4em 0em',
	    fontSize: '18px',
		letterSpacing: '0.095em',
		backgroundColor: '#cccccc',
	  },
	  title: {
	  	fontSize: '50px',
	  	margin: '2em 0em 3em 0em',
	  },


}

export default Work;