import React, {useState} from 'react';

import ContactForm from '../Components/Form'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Contact () {
	return(
		<div>

			<Jumbotron fluid style={style.header}>
			  <Container>
			    <h1 >Tell us about your idea, and we'll make it a reality together</h1>
			    <p>
			      Get in touch and we’ll connect you with the business team nearest you.
			    </p>
			  </Container>
			</Jumbotron>

			<ContactForm />

		</div>
	)
}

const style = {
  header: {
    fontSize: '',
    padding: '25px',
    textAlign: 'center',
    padding: '6em 0em 6em 0em',
    fontSize: '18px',
	letterSpacing: '0.095em',
	lineHeight: '5',
  }

}

export default Contact;