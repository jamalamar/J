import React, {useState} from 'react';

function Home () {
	return(
		<div>
			<h2 style={style.header}>Your idea... we make it real.</h2>
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

export default Home;