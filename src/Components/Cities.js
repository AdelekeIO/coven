import React, { Component } from 'react'
import CityItem from './CityItem'
// import { observer } from 'mobx-react-lite';
import {observer,inject} from 'mobx-react'
import axios from 'axios'

@inject('covenStore')
@observer
 class Cities extends Component {
     state={
cities:[]
     }

    componentDidMount(){
        // console.log();
        
        axios.get('https://opensky-network.org/api/states/all')
        .then(res =>{
          // console.log(res.data);
          let {states} = res.data; 
                  var data = [];
        var length = 10; // user defined length

        for(var i = 0; i < length; i++) {
            console.log(i);
            // console.log(states[i]);
            
            data.push(states[i]);
        }
          // console.log(data);
          
          this.setState({cities:[...data]});
          // this.sendCities;
          console.log();
          
         
        })
        .catch(err=>{
          console.log(err);
          
        });
      }

      logCities(){
          console.log(this.state.cities);
          
      }
    render() {
      
        return (this.state.cities.map((city) => 
        <React.Fragment>
           

        <CityItem key={city[0]} city={city}/>

        
        </React.Fragment>
        )
      
                    
            
        )
    }
}

export default Cities;