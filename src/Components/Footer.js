import React from 'react';
import { Link } from 'react-router-dom'

function Footer (){
	return(

		<footer class="page-footer font-small blue pt-4" style={style.footer}>

		  {/* Footer Links */}
		  <div class="container-fluid text-center text-md-left">

		    {/* Grid Row */}
		    <div class="row">

		      {/* Grid Column */}
		      <div class="col-md-6 mt-md-0 mt-3">

		        {/* Content */}
		        <h3 class="text-uppercase">JinX</h3><h6>Digital Studio & Tech Solutions</h6>
		        <p>All Rights Reserved.</p>

		      </div>
		      
		      {/* Grid Column */}

		      <hr class="clearfix w-100 d-md-none pb-3"></hr>

		      {/* Grid Column */}
		      <div class="col-md-3 mb-md-0 mb-3">

		        {/* Links */}
		        <h6 class="text-uppercase">Social Media</h6>

		        <ul class="list-unstyled">
		          <li>
		            <a href="https://instagram.com" target="_blank" >Instagram (Coming Soon...)</a>
		          </li>
		          <li>
		            <a href="https://facebook.com" target="_blank" >Facebook (Coming Soon...)</a>
		          </li>
		          <li>
		            <a href="https://linkedin.com" target="_blank" >Linked-In (Coming Soon...)</a>
		          </li>
		          <li>
		            <a href="#!"></a>
		          </li>
		        </ul>

		      </div>
		      {/* Grid Column */}


		      {/* Grid Column */}
		      <div class="col-md-3 mb-md-0 mb-3">

		        {/* Links */}
		        <h6 class="text-uppercase">Navigation</h6>

		        <ul class="list-unstyled">
		          <li>
		            <Link to="/">Home</Link>
		          </li>
		          <li>
		            <Link to="/Work">Work</Link>
		          </li>
		          <li>
		            <Link to="/About">About</Link>
		          </li>
		          <li>
		            <Link to="/Contact">Contact</Link>
		          </li>
		        </ul>

		      </div>
		      {/* Grid Column */}






		    </div>
		    {/* Grid row */}

		  </div>
		  {/* Footer Links */}

		  {/* Copyright */}
		  <div class="footer-copyright text-center py-3">© 2019 Copyright:
		    <a> JinX by Jamal Amar</a>
		  </div>
		</footer>
	)
}


const style = {
	footer: {
		backgroundColor: 'rgba(9,10,19,100%)',
		color: 'white',
		borderRadius: '3px',
		fontSize: '10px'
	}
}


export default Footer;