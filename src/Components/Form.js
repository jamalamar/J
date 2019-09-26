import React from 'react';

import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
 
 function ContactForm (){
 	return(
 	
 	<div style={style.formContainer}>
		<Form name="JinxContactForm" method="post" style={style.form}>

			{/*Value set to the same of the Form on Index.html*/}
		    <input type="hidden" name="form-name" value="JinxContactForm" />

		 <Form.Group controlId="formName&LastName">
		  <Row>
		    <Col>
			  <Form.Label>First Name</Form.Label>
		      <Form.Control placeholder="Enter first name" name="FirstName" required/>
		    </Col>
		    <Col>
			  <Form.Label>Last Name</Form.Label>
		      <Form.Control placeholder="Enter last name" name="LastName" required/>
		    </Col>
		  </Row>
		 </Form.Group>

		 <Form.Group controlId="formPhone&Country">
		  <Row>
		    <Col>
			  <Form.Label>Country</Form.Label>
		      <Form.Control placeholder="Enter country" name="Country" required/>
		    </Col>
		    <Col>
			  <Form.Label>Phone Number</Form.Label>
		      <Form.Control placeholder="Enter phone" name="Phone" required/>
		    </Col>
		  </Row>
		 </Form.Group>						 

		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>Email Address</Form.Label>
		    <Form.Control type="email" placeholder="Enter email" name="Email" required/>
		    <Form.Text className="text-muted">
		      We'll never share your email with anyone else.
		    </Form.Text>
		  </Form.Group>


		  <Form.Group controlId="exampleForm.ControlTextarea1">
		    <Form.Label>Message</Form.Label>
		    <Form.Control as="textarea" rows="3" name="Message"/>
		  </Form.Group>

		  <Button variant="primary" type="submit">
		    Submit
		  </Button>

		</Form>
	</div>	
	)
}


const style = {
	formContainer: {
	  	display: 'flex',
	  	justifyContent: 'center',
	  	margin: '4em 0em 9em 0em',
	 },
	form: {
		width:'85%',
	}
}

export default ContactForm;