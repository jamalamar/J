import React, {useState} from 'react';

import ContactForm from '../Components/Form'


function Contact () {
	return(
		<div>

			<h2 style={style.header}>Contact Information</h2>

			<ContactForm />

		</div>
	)
}

const style = {
  header: {
    fontSize: '50px',
    padding: '25px',
    textAlign: 'center',
  },

}

export default Contact;