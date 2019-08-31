import  {observable, action, computed } from 'mobx'
import axios from 'axios'

 class CovenStore  {
@observable cities = [];
@observable todos = [];
@observable pendingRequests = 0;

@observable author = null

@computed get authorName() {
  return this.author || 'Anonymous'
}


@action addCity(city) {
    
    this.cities =city;
}

@computed get AllCities(){
    axios.get('https://opensky-network.org/api/states/all')
      .then(res =>{
        // console.log(res.data);
        let {states} = res.data; 
        this.addCity(states);
        // this.setState({states:states});
        // this.sendCities;
       
      })
      .catch(err=>{
        console.log(err);
        
      });
      return this.cities;
}

@computed get getCities(){
    return this.cities;
}
}

const store = new CovenStore();
export default store;
