import React, {useState} from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact () {
	return(
		<div>

			<h2 style={style.header}>Contact Information</h2>

			<div style={style.formContainer}>
				<Form style={style.form}>
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Email address</Form.Label>
				    <Form.Control type="email" placeholder="Enter email" />
				    <Form.Text className="text-muted">
				      We'll never share your email with anyone else.
				    </Form.Text>
				  </Form.Group>

				   <Form.Group controlId="exampleForm.ControlTextarea1">
				    <Form.Label>Notes</Form.Label>
				    <Form.Control as="textarea" rows="3" />
				  </Form.Group>

				  <Form.Group controlId="formBasicCheckbox">
				    <Form.Check type="checkbox" label="Check me out" />
				  </Form.Group>

				  <Button variant="primary" type="submit">
				    Submit
				  </Button>
				</Form>
			</div>

		</div>
	)
}

const style = {
  header: {
    fontSize: '50px',
    padding: '25px',
    textAlign: 'center',
  },
  formContainer: {
  	display: 'flex',
  	justifyContent: 'center',
  	margin: '4em 0em 9em 0em',
 },
 form: {
 	width: '60%',
 }

}

export default Contact;