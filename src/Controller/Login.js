import React from 'react';    
import { Link } from 'react-router-dom'; 
import history from './history';
import axios from 'axios';

class Login extends React.Component{
	constructor(props){
		super(props); 
        this.props= props; 
		this.state = {username: '',password : ''};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
		if(sessionStorage.getItem('loginStaus') == null)
				history.push("/");  
			else
				history.push("/User");   
		 
	}
	handleChange(e) {
  	let name = e.target.name;
  	let val = e.target.value;
    this.setState({[name]: val});
  }

  handleReset(e){  
    e.preventDefault();  
     this.setState({username: '',password :''}); 
  }

 handleSubmit(e){ 
    e.preventDefault(); 
    console.log(this.state);
    const user = {
      username: this.state.username,
      password : this.state.password
    };
    axios.post('http://localhost/hdms/login.php',{ user
    })
      .then(res => {
        const persons = res;
        console.log(persons);
      })
      .catch(function (error) {
      // handle error
      console.log(error);
    })

    if(this.state.username === "test" && this.state.password === "test"){ 
    	sessionStorage.setItem('loginStaus',this.state.username)
 		history.push("/User");  
    }
    else{
    	document.getElementById("errormsg").style.display = "block";
    	setTimeout(function(){
		  document.getElementById("errormsg").style.display = "none"; 
		 }, 3000);
    }
	}
	render(){ 
		return ( 
        <div className="container Loginpage">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                    <div id="errormsg" className="alert alert-warning" role="alert">
					  Please enter valid Username and password!
					</div>
                        <div id="login-form" className="form"> 
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label><br/>
                                <input type="text" name="username"value={this.state.username} id="username" onChange={this.handleChange} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br/>
                                <input type="password" name="password" value={this.state.password} id="password" onChange={this.handleChange}  className="form-control" />
                            </div>
                            
                            <div className="form-group">
                                <button  className="btn btn-info  " value="submit" onClick={this.handleSubmit}>Login</button>
                                <button  className="btn btn-danger float-right" value="submit" onClick={this.handleReset}> Reset</button>
                            </div>
                            <div className="form-group">
                                  <div id="register-link" className="text-center">
	                                <Link to="register" className="text-info">Register here</Link>
	                            </div>
	                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> 
		);
	}
}

export default Login;