
import React from 'react';    
import axios from 'axios';
import Autocomplete from 'react-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import history from './history'; 
class View extends React.Component { 
	constructor(props) {
    	super(props);  
       if(sessionStorage.getItem('loginStaus') == null){
        history.push("/"); 
        }
    		 this.state = {
			    user: [],
          title : '',
           val: '',
           values :[],
           selected : false,
            rows: [],
            selectval : '' ,
            typestyle : "hidden"
				}  
         this.handleChange = this.handleChange.bind(this); 

		  } 
      
  
    handleSubmitMed = (e) => {
    let name = e.target.name; 
    this.setState((prevState, props) => {
    let deleterow = []
       console.log([...prevState.rows]);
    
    console.log([...prevState.rows]);
      return { rows:deleterow};
    });
  }; 

 handleChange(e) { 
    let val = e.target.value; 
   this.setState({val,selected : false});
   if(val.length >1 )
   axios.get(`https://jsonplaceholder.typicode.com/users?id=2`)
      .then(res => {
        var values = res.data; 
        this.setState({ values });
      })

  }

  handleAddRow = () => {  
    this.setState((prevState, props , index) => {
      const row = { content: ["tab", this.state.val,"NA","AF","","",false,false,false,false,false,""]};
      return { rows: [...prevState.rows, row] };
    });  
     this.setState({val: ""});
  };  

  handleRemoveRow = (e) => {
    let name = e.target.name; 
    this.setState((prevState, props) => {
    let deleterow = [...prevState.rows]
        deleterow.splice(name, 1)

      return { rows:deleterow};
    });
  }; 

  handleCheckbox = (e) =>{
        let value = e.target.value;  
        let id = e.target.id;  
        let arrayindex = e.target.name; 
        if(value == "false"){
          value = true 
        }
        else{ 
          value = false
        }  
        this.setState((prevState, props) => { 
        let updaterow = [...prevState.rows]
          updaterow[arrayindex]["content"][id] = value   
        return { rows:updaterow};
      }); 
    } 

  updateInrows = (e) =>{
        let value = e.target.value;  
        let id = e.target.id;  
        let arrayindex = e.target.name; 
        this.setState((prevState, props) => { 
        let updaterow = [...prevState.rows]
          updaterow[arrayindex]["content"][id] = value  
          console.log([...prevState.rows]);
        return { rows:updaterow};
      }); 
    } 

  handleMedtype = (e) =>{
      let value = e.target.value;   
     if(value === "sup")
      this.setState({typestyle :  'visible'});
    else
       this.setState({typestyle :  'hidden'});
  }

  componentDidMount () {
    console.log("sdfsd");
    const { viewId } = this.props.match.params 	
   this.setState({user: viewId});
    axios.get(`https://jsonplaceholder.typicode.com/users?id=${viewId}`)
      .then(res => {
        const user = res.data[0]; 
        this.setState({ user });
      })
        
     
  }
  render() {
    var tempDate = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var date = tempDate.getDate()+ '-' + (months[tempDate.getMonth()]) + '-' + tempDate.getFullYear() ;
  const currDate =  date;

    const divStyle = {
      display:  this.state.val.length> 1 ? 'block' : 'none' 
    };
      const addStyle = {
        display:  this.state.selected ? 'block' : 'none' 
      }; 
    const addStyletable = { 
      visibility :  this.state.rows.length >0  ? 'visible' : 'hidden' 
    }; 
 
  const addMTStyle = { 

      visibility :  this.state.typestyle 
    }; 
 
    return(
    	<div className="container">  
        
    <div className="row mt-2">
        <div className="col-12"> 
            <div className="card">
                <div className="card-body p-0">
                    <div className="row p-5">
                        <div className="col-md-6">
                            <img src="http://lobianijs.com/lobiadmin/version/1.0/ajax/img/logo/lobiadmin-logo-text-64.png" alt="" data-holder-rendered="true" />
                        </div>

                        <div className="col-md-6 text-right text-info">
                           <h2 className="name"> 
                            Arboshiki 
                        </h2>
                        <div>455 Foggy Heights, AZ 85004, US</div>
                        <div>(123) 456-789</div>
                        <div>company@example.com</div>
                         </div>
                    </div>

                    <hr className="my-2" />

                    <div className="row  p-5">
                        <div className="col-md-9 col-sm-6 pb-3">
                            <h3 className="font-weight-bold mb-2"> {this.state.user.name}</h3>
                            <p className="mb-1">Mobile : {this.state.user.id}</p>
                            <p className="mb-1">Age : {this.state.user.userId}</p> 
                            <p className="mb-1">Gender : {this.state.user.email}</p>
                            <p className="mb-1">Address : {this.state.user.website}</p>
                        </div>

                        <div className="col-md-3 col-sm-6 text-right"> 
                         <p className="font-weight-bold mb-1 text-danger pb-3">Date : {currDate}</p>
                            <div className="input-group mb-2">
                                  <div className="input-group-prepend input-sm">
                                    <div className="input-group-text input-sm">Weight</div>
                                    </div>
                                  <input type="text" className="form-control input-sm" id="weight" name="weight"   required />
                            </div>
                            <div className="input-group mb-2">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">Temp</div>
                                    </div>
                                  <input type="text" className="form-control" id="temp" name="temp"   required />
                            </div>
                            <div className="input-group mb-2">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">BP</div>
                                    </div>
                                  <input type="text" className="form-control" id="bp" name="bp"   required />
                            </div>
                             
                        </div>
                    </div>

                    <div className="row p-5">
                        <div className="col-md-12">
                        <div className="row pb-5">
                        <div className="autocomplete-wrapper col-md-10 ">


                         <Autocomplete inputProps={{ placeholder: 'Search Medicines' }}
                          value={this.state.val} name="val"
                          items= {this.state.values}
                          getItemValue={item => item.name}
                          shouldItemRender={ renderMovieTitle}
                          renderMenu={item => (
                            <div className="dropdown" style={divStyle}>
                              {item}
                            </div> 
                          )}
                        renderItem={(item, isHighlighted) =>

                            <div key={item.id} className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                             {item.name !== "" ? item.name: 'No data found'}
                            </div> 
                        }
                           onChange={this.handleChange}
                          onSelect={val => this.setState({ val,  selected :true }) }
                        /> 
                        </div>
                          <div className=" col-md-2" style={addStyle}>
                            <button id="printInvoice" onClick={this.handleAddRow} className="btn btn-danger m-1"><i className="fa fa-print"></i> Add</button>
                          </div> 
                      </div>
                            <table className="table table-responsive-sm" id="medtable" style={addStyletable} >
                                <thead>
                                    <tr className="text-center">
                                        <th className="border-0 text-uppercase small font-weight-bold">Type of Medicine</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Medicine</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">duration/Day</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Before / After Food</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Quantity</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">No Of Days</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Need to take</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Comments</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.rows.map((row, index) => (
                                      
                                        <tr key={index}> 
                                        <td className="">
                                        <select className="form-control form-control-sm" value={row.content[0]}onChange={(event) => { this.handleMedtype(event); this.updateInrows(event)}} id="0" name={index}>
                                            <option value="tab">Tab</option>
                                            <option value="sup">Sup</option>
                                            <option value="inj">Inj</option>
                                          </select>
                                        </td>
                                        <td className="">{row.content[1]}</td>
                                        <td className=""><select className="form-control form-control-sm"   value={row.content[2]} onChange={this.updateInrows}  id="2" name={index}>
                                            <option value="NA">NA</option> 
                                            <option value="4hrs">4 Hrs</option>
                                            <option value="6hrs">6 Hrs</option> 
                                            <option value="8hrs">8 Hrs</option>    
                                            <option value="1week">1 Week</option>
                                             <option value="2week">2 Weeks</option>
                                              <option value="3week">3 Weeks</option>
                                               <option value="4week">4 Weeks</option>
                                          </select>
                                        </td> 
                                        <td>
                                        <select className="form-control form-control-sm"  value={row.content[3]} onChange={this.updateInrows}  id="3" name={index}>
                                             <option value="AF">AF</option>
                                            <option value="BF">BF</option> 
                                          </select>
                                          </td>
                                          <td>
                                         <div className="input-group">
                                         <input type="text" className="form-control" value={row.content[4]} onChange={this.updateInrows}  id="4" name={index}  />
                                         <div className="input-group-prepend" style={{visibility: row.content[0] ==='sup' ? "visible" : "hidden"}}>
                                            <div className="input-group-text">ML</div>
                                         </div>
                                        </div>
                                        </td>
                                        <td ><input className="form-control" disabled={row.content[0] ==='sup' ? false :true }  type="text" value={row.content[5]} onChange={this.updateInrows}  id="5" name={index}  /></td>
                                        <td >
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value={row.content[6]} checked={row.content[6]} onChange={this.handleCheckbox}  id="6" name={index}  />
                                          <label className="form-check-label" htmlFor="defaultCheck1">
                                           EMor
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value={row.content[7]} checked={row.content[7]} onChange={this.handleCheckbox}  id="7" name={index} />
                                          <label className="form-check-label" htmlFor="defaultCheck2">
                                            Mor
                                          </label>
                                        </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value={row.content[8]} checked={row.content[8]} onChange={this.handleCheckbox}  id="8" name={index}/>
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                             Anon
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value={row.content[9]} checked={row.content[9]} onChange={this.handleCheckbox}  id="9" name={index} />
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                             EVNG
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value={row.content[10]} checked={row.content[10]} onChange={this.handleCheckbox}  id="10" name={index} />
                                            <label className="form-check-label" htmlFor="defaultCheck2">
                                              N8
                                            </label>
                                          </div>
                                        </td>
                                        <td ><input type="text"   className="form-control" value={row.content[11]} onChange={this.updateInrows}  id="11" name={index} /></td> 
                                        <td><span name="{index}" onClick={this.handleRemoveRow} className="btn btn-danger btn-xs "><FontAwesomeIcon icon={faTrash} /></span></td>
                                    </tr> 
                                     
                                    ))}
                                </tbody>
                            </table>
                            <div className="toolbar hidden-print p-2 mt-5 " style={addStyletable}>
                              <div className="text-right">
                                <button name="handleSubmitMed" className="btn btn-info m-1" onClick={this.handleSubmitMed}>  Submit</button>
                              </div> 
                            </div>  
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    </div>
    
    <div className="text-light mt-5 mb-5 text-center small">by :  Doctor Name</div>

</div>
    	)
  }
} 
export function renderMovieTitle(state, val) {
    return (
        state.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
    );
}

export default View; 
