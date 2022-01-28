import './App.css';
import { Component } from "react";

class App extends Component {

state  = {
  person: null
}

async componentDidMount(){

const url = "https://api.randomuser.me/";
const response = await fetch(url);
const data = await response.json();
this.setState ({person:data.results[0]})
 console.log(data.results[0])
}
 
render(){
  return  <div className='container'>
    {!this.state.person ? <p>Loading ...</p> :
    <div>
    <img src ={this.state.person.picture.large}  alt='person' />
    <p> <span>  First Name:</span> {this.state.person.name.first}</p>
    <p> <span>Last Name:</span> {this.state.person.name.last}</p>
    <p> <span> User Name:</span> {this.state.person.login.username}</p>
    <p> <span> Email:</span> {this.state.person.email}</p>
    <p> <span>  Phone: </span>{this.state.person.phone}</p>
    <p> <span> Cell:</span> {this.state.person.cell}</p>
    <p> <span> Country: </span>{this.state.person.location.country}</p>
    <p> <span> City:</span> {this.state.person.location.city}</p>
    <p> <span> Gender: </span>{this.state.person.gender}</p>
    <p> <span> Date of Birth:</span> {this.state.person.dob.date}</p>
    <p> <span> Age:</span> {this.state.person.dob.age}</p>
     </div> 
}
    
 </div>
        
    }
    }
   
 
  

export default App;
