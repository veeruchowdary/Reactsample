import React from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Controller/Login';
import User from './Controller/User';
import history from './Controller/history';
import Logout from './Controller/Logout';
import PatientsList from './Controller/PatientList';
import Navbar from './Controller/Navbar';
import View from './Controller/View'; 

import { Router ,Route} from 'react-router-dom';  
class App extends React.Component{
	constructor(props) {  
		super(props);
		this.state = {
			login: sessionStorage.getItem('loginStaus')
		}
	}
	render(){  


	  return (

	  	 <Router history={history} >  
			{["/", "/User","/PatientsList","/View/:handle"].map((path, index) =>
			<Route path={path} exact component={Navbar} key={index} />
			)} 
		<Route path="/View/:viewId" component={View} /> 
	    <Route path='/' exact component={Login} />    
	    <Route path='/User' component={User}  /> 
	    <Route path='/PatientsList' component={PatientsList} />  
	    <Route path='/Logout' component={Logout} /> 
	    </Router>  
	  );
	}
}
export default App;
