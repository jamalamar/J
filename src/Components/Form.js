import React from 'react';
import NetlifyForm from 'react-netlify-form'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
 
 function ContactForm (){
 	return(
			<NetlifyForm name='Jinx Contact Form'>
			  {({ loading, error, success }) => (
			    <div>
			      {loading &&
			        <div>Loading...</div>
			      }
			      {error &&
			        <div>Your information was not sent. Please try again later.</div>
			      }
			      {success &&
			        <div>Thank you for contacting us!</div>
			      }
			      {!loading && !success &&
			      	<div style={style.formContainer}>

					    <Form style={style.form}>
						 <Form.Group controlId="formName&LastName">
						  <Row>
						    <Col>
							  <Form.Label>First Name</Form.Label>
						      <Form.Control placeholder="Enter first name" />
						    </Col>
						    <Col>
							  <Form.Label>Last Name</Form.Label>
						      <Form.Control placeholder="Enter last name" />
						    </Col>
						  </Row>
						 </Form.Group>

						 <Form.Group controlId="formPhone&Country">
						  <Row>
						    <Col>
							  <Form.Label>Phone Number</Form.Label>
						      <Form.Control placeholder="Enter number" />
						    </Col>
						    <Col>
							  <Form.Label>Country</Form.Label>
						      <Form.Control placeholder="Enter country" />
						    </Col>
						  </Row>
						 </Form.Group>						 

						  <Form.Group controlId="formBasicEmail">
						    <Form.Label>Email Address</Form.Label>
						    <Form.Control type="email" placeholder="Enter email" />
						    <Form.Text className="text-muted">
						      We'll never share your email with anyone else.
						    </Form.Text>
						  </Form.Group>


						  <Form.Group controlId="exampleForm.ControlTextarea1">
						    <Form.Label>Message</Form.Label>
						    <Form.Control as="textarea" rows="3" />
						  </Form.Group>

						  <Button variant="primary" type="submit">
						    Submit
						  </Button>
						  
						</Form>

					</div>
			      }
			    </div>
			  )}
			</NetlifyForm>		
	)
}


const style = {
	formContainer: {
	  	display: 'flex',
	  	justifyContent: 'center',
	  	margin: '4em 0em 9em 0em',
	 },
	form: {
	 	
	 },
}

export default ContactForm;