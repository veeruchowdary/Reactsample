import React from 'react';  
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import history from './history'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios';
class PatientList extends React.Component {
	 constructor(props) {
    	super(props);  
    	  if(sessionStorage.getItem('loginStaus') == null){
    		history.push("/"); 
    		}
       this.state = {
          data: []
        } 
	};
   componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }


  render() {  
  	const rows = [];
  	if(this.state&& this.state.data && this.state.data.length > 0){
   for(var i=0;i<this.state.data.length;i++){
    //rows.push(createData(this.state.data[i].id, this.state.data[i].name, this.state.data[i].mob, this.state.data[i].age, this.state.data[i].address));
     rows.push(createData(this.state.data[i].id, this.state.data[i].name, this.state.data[i].username, this.state.data[i].email, this.state.data[i].address.city));
   }
}

  return (
  	<div className="content">
  		     <TableContainer component={Paper}>
      <Table aria-label="table" className="table table-striped table-responsive-sm">
        <TableHead>
          <TableRow>
            <TableCell className="text-danger" align="center"><b>ID</b></TableCell>
            <TableCell className="text-danger"  align="center"><b> Name</b></TableCell>
            <TableCell className="text-danger"  align="center"><b>MOB</b></TableCell>
            <TableCell className="text-danger"  align="center"><b>Age</b></TableCell>            
            <TableCell className="text-danger"  align="center"><b>Address</b></TableCell> 

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center"><Link className="nav-link" to={`/View/${row.id}`}>{row.name}</Link> </TableCell>
              <TableCell align="center">{row.mob}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  	)
};

};

function createData(id, name, mob, age, address) {
  return {id, name, mob, age, address };
}

export default PatientList;