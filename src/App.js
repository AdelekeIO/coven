import React, { Component } from 'react'
import './App.css';
import {observer,inject} from 'mobx-react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import axios from 'axios';
import Cities from './Components/Cities'




@inject('covenStore')



@observer 
 class App extends Component {
   state={
     states:[]
   };
  
  
    
  
  render() {
    const {covenStore} = this.props; 
    console.log(covenStore);

  
    
    return (
      <div id="root">
           
      <Router>
<Route  path="/dashboard" render={props =>(
    <React.Fragment>
    <div className="App" >
        <Header />
        <div className="row koko col-lg-12 border d-inline-flex p-2 p-5"style={{height:'50em',display:'flex'}}>
        <Cities/>
        </div>
       
    </div>
    </React.Fragment>
    )}/>


       
     
       <Route exact path="/" component={Login}/>
       </Router>
       </div>
    )
  }
}

export default App;
