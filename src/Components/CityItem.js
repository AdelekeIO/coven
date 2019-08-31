import React, { Component } from 'react'


 class CityItem extends Component {
    render() {
        console.log(this.props.citie);
        let city =this.props.city[2];
        
        return (
            
                    <figure className="snip1396 blue hover">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample19.jpg" alt="pr-sample19" />
                    <div className="image">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample19.jpg" alt="pr-sample19" />
                        </div>
                    <figcaption>
                        <h3>{city}</h3>
                        <p>If you do the job badly enough, sometimes you don't get asked to do it again. </p>
                        <input type="button" className="btn btn-success" value="View Details" data-toggle="modal" data-target="#exampleModal"/>
                    </figcaption>
                    
                    {/* <div className="price">
                        <s>$24.00</s>$19.00
                    </div> */}
                    </figure>
                    
        
        )
    }
}


export default CityItem;