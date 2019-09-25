import React from 'react';

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
		        <h5 class="text-uppercase">JinX</h5><h6>Digital Studio</h6>
		        <p>All Rights Reserved.</p>

		      </div>
		      {/* Grid Column */}

		      <hr class="clearfix w-100 d-md-none pb-3"></hr>


		      {/* Grid Column */}
		      <div class="col-md-3 mb-md-0 mb-3">

		        {/* Links */}
		        <h5 class="text-uppercase">Links</h5>

		        <ul class="list-unstyled">
		          <li>
		            <a href="#!">Link 1</a>
		          </li>
		          <li>
		            <a href="#!">Link 2</a>
		          </li>
		          <li>
		            <a href="#!">Link 3</a>
		          </li>
		          <li>
		            <a href="#!">Link 4</a>
		          </li>
		        </ul>

		      </div>
		      {/* Grid Column */}

		      {/* Grid Column */}
		      <div class="col-md-3 mb-md-0 mb-3">

		        {/* Links */}
		        <h5 class="text-uppercase">Links</h5>

		        <ul class="list-unstyled">
		          <li>
		            <a href="#!">Link 1</a>
		          </li>
		          <li>
		            <a href="#!">Link 2</a>
		          </li>
		          <li>
		            <a href="#!">Link 3</a>
		          </li>
		          <li>
		            <a href="#!">Link 4</a>
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