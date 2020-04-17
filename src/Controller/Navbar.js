import React from 'react';   
import '../App.css' 
import { Link } from 'react-router-dom';  
class Navbar extends React.Component{ 
	constructor(props) { 
		super(props); 
		this.state = {
			login: sessionStorage.getItem('loginStaus')
		} 
	}
	render(){  
		const isLoggedIn = this.state.login;  
    	let button; 
    	if (isLoggedIn != null) {
	      button = <div className="collapse navbar-collapse" id="navbarSupportedContent">
	      <p className="text-capitalize font-weight-bold m-3 text-success" >Welcome {this.state.login}</p>
			            <ul className="navbar-nav ml-auto">
			             
			            	<li className="nav-item">
			                    <Link className="nav-link text-white" to="/User">Book Appointment</Link>
			                </li>
			            	<li className="nav-item">
			                    <Link className="nav-link text-white" to="/PatientsList">patient List</Link>
			                </li>
			                <li className="nav-item">
			                    <Link className="nav-link text-white" to="/Logout">Logout</Link>
			                </li>
			            </ul>

			        </div>;
	    }
	return(

		  <div className="App bg-warning">

	      <header className="App-header">
	        <div className="Mainapp">
	        <nav className="navbar navbar-expand-lg navbar-light navbar-laravel bg-dark">
			    <div className="container">

			        <Link className="navbar-brand text-danger" to="/">Sample App</Link >
			        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			            <span className="navbar-toggler-icon"></span>
			        </button>

			        {button}
			    </div>
			</nav> 
			</div>
	      </header>
	    </div>

		); 
} 
}
export default Navbar;