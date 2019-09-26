import React from 'react';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
 
 function ContactForm (){
 	return(
 	
 	<div style={style.formContainer}>
		<Form>

			{/*Value set to the same of the Form on Index.html*/}
		    <input type="hidden" name="form-name" value="JinxContactForm" />

		 <Form.Group controlId="formName&LastName">
		  <Row>
		    <Col>
			  <Form.Label>First Name</Form.Label>
		      <Form.Control placeholder="Enter first name" name="FirstName"/>
		    </Col>
		    <Col>
			  <Form.Label>Last Name</Form.Label>
		      <Form.Control placeholder="Enter last name" name="LastName"/>
		    </Col>
		  </Row>
		 </Form.Group>

		 <Form.Group controlId="formPhone&Country">
		  <Row>
		    <Col>
			  <Form.Label>Phone Number</Form.Label>
		      <Form.Control placeholder="Enter number" name="Phone"/>
		    </Col>
		    <Col>
			  <Form.Label>Country</Form.Label>
		      <Form.Control placeholder="Enter country" name="Country"/>
		    </Col>
		  </Row>
		 </Form.Group>						 

		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>Email Address</Form.Label>
		    <Form.Control type="email" placeholder="Enter email" name="Email"/>
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
	 }
}

export default ContactForm;