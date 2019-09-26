import React, {useState} from 'react';

import ContactForm from '../Components/Form'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Contact () {
	return(
		<div>

			<Jumbotron fluid style={style.header}>
			  <Container>
			    <h1 style={style.title}>Tell us about your idea, and we'll make it a reality together</h1>
			    <p>
			      Get in touch and we’ll connect you with the business team nearest you.
			    </p>
			    <Button variant="light" href="#form">Contact</Button>
			  </Container>
			</Jumbotron>

			<div id="form" style={style.form}>
				<ContactForm/>
			</div>

		</div>
	)
}

const style = {
  header: {
    fontSize: '',
    backgroundImage: 'url(/Assets/Contact-Background.jpg)',
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
  form: {
  	paddingTop: '3em'
  }

}

export default Contact;