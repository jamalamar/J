import React, {useState} from 'react';

function About () {
	return(
		<div>
			<h2 style={style.header}>About Us</h2>
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

export default About;