import React from 'react';   
import history from './history';

class Logout extends React.Component {
 
  constructor(props) {  
  	super(props);	
		sessionStorage.removeItem('loginStaus');
		history.push("/"); 
	}
	render(){
	return( 	
		<div></div>
	)
	}
}

export default Logout;