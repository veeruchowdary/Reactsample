import React from 'react';  

import history from './history';

var patientList = []; 
var errormsg = "Please enter valid Details!";
class User extends React.Component {
 
  constructor(props) { 
    super(props);
    if(sessionStorage.getItem('loginStaus') == null){
    	history.push("/");  
    } 
    this.props= props; 
	this.state = {name: '',mob : '', gender : 'male' , age : '', address : '', doctor : 'NA' }; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(e) {
  	let name = e.target.name;
  	let val = e.target.value;
    this.setState({[name]: val});
  }

  handleSubmit(event) { 
    event.preventDefault();  
     var details = {
      id: patientList.length,
      name: this.state.name,
      mob: this.state.mob,
      gender: this.state.gender,
      age: this.state.age,
      address: this.state.address,
    };
    if(this.state.name === ''|| this.state.mob === ''|| this.state.age === ''|| this.state.address === ''){
    	errormsg = "Please enter valid Details!";
    	document.getElementById("errormsg").style.display = "block";
    	setTimeout(function(){
		  document.getElementById("errormsg").style.display = "none"; 
		 }, 3000);
    }
    else{
    	JSON.parse(localStorage.getItem('patientList'));
    patientList.push(details);
    localStorage.setItem('patientList', JSON.stringify(patientList)); 
    // this.data =  JSON.parse(localStorage.getItem('patientList'));  
    this.setState({name: '',mob : '', gender : 'male', age : '', address : '', doctor : 'NA' });	
    errormsg = "patient details saved successfully!";
    if(document.getElementById("successmsg"))
   		 document.getElementById("successmsg").style.display = "block";
    	setTimeout(function(){
    		if(document.getElementById("successmsg"))
		  		document.getElementById("successmsg").style.display = "none"; 
		 }, 3000);
    }

  
  }
  render() {
  	
  return (
  	<div className="container Loginpage">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <div id="login-form" className="form"> 
                        
                            <div className="form-group">
                            	<label  className="text-info" htmlFor="name">Patient Name *</label>
								<input className="input form-control" type="text" value={this.state.name} onChange={this.handleChange} id="name" name="name"  pattern="[a-zA-Z][a-zA-Z ]{2,}" required /> 			
                            </div>
                            <div className="form-group">
	                            <label  className="text-info"  htmlFor="mob">Mobile Number *</label>
								              <input className="input form-control" type="number" value={this.state.mob} onChange={this.handleChange} id="mob" name="mob"  pattern=" {0-9}" required />
 							                </div>
                              <div className="form-group">
                              <label  className="text-info"  htmlFor="gender">Gender *</label>
                               <select className="form-control form-control text-info" value={this.state.gender} onChange={this.handleChange}   name= "gender" id="gender"> 
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                             <div className="form-group">
	                             <label  className="text-info"  htmlFor="age">Age *</label>
					                    <input className="input form-control" type="number" value={this.state.age} onChange={this.handleChange} id="age" name="age"   pattern="{0-9}" required />
	 						              </div>

                            <div className="form-group">
                            	<label  className="text-info"  htmlFor="address">Address *</label>
              								<input className="input form-control" type="text" value={this.state.address} onChange={this.handleChange}  id="address"  name ="address"  required />
              							</div>
                            <div className="form-group">
                              <label  className="text-info"  htmlFor="doctor">Doctor *</label>
                               <select className="form-control form-control text-info" value={this.state.doctor} onChange={this.handleChange}   name= "doctor" id="doctor"> 
                                <option value="NA">NA</option>
                                <option value="doctor 1">Doctor 1</option>
                                <option value="doctor 2">Doctor 2</option>
                              </select>
                            </div>
                            
                            
                            <div className="form-group"> 
								              <button className=" form-control btn btn-success" type="submit" value="Submit" onClick={this.handleSubmit}  > Submit </button>    
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-md-3"> 
                    <div id="errormsg" className="alert alert-danger " role="alert">
                                {errormsg}
                              </div>
                              <div id="successmsg" className="alert alert-success " role="alert">
                                {errormsg}
                              </div>
                </div>
            </div> 
        </div>  

 );
  }
}

export default User;
