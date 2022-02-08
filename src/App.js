import React from 'react';

//Internal Classes
import Emojis from './Emojis.js';
import PathMap from './PathMap.js'

//Styling
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { map_center : [40.762295, -73.968148], heatmap: false,
                  mask_list : [], maskhole_list : [], nomask_list : [],
                  glasses_im: 1, maskhole_im: 0, nomask_im: 0};
    this.showPosition = this.showPosition.bind(this)
    this.imageClick = this.imageClick.bind(this)
    this.updateData = this.updateData.bind(this)

  }

  showPosition(position) {
      // console.log("Logging at: " + position.coords.latitude.toString() +", "+ position.coords.longitude.toString());
      this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude, map_center : [position.coords.latitude, position.coords.longitude]});
  }

  showError(error) {

    const errorMessage =  { code : 1, message : "Location Settings error" };

    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation. To log data, please enable Location Services for your browser.")
        throw errorMessage;
        break;
      case error.TIMEOUT:
        alert("To log data, please enable Location Services for your browser.")
        throw errorMessage;
        break;
      default:
        alert("To log data, please enable Location Services for your browser.")
        throw errorMessage;
    }
  }

  getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition, this.showError, {timeout:20000,enableHighAccuracy:true});
      } else {
          alert("Geolocation is not supported by this browser. To log data, please enable Location Services for your browser.");
      }
  }

  updateData(position, maskStatus) {

    let body = {
      timestamp: new Date().toUTCString(),
      mask_status: maskStatus,
      latitude : position.coords.latitude,
      longitude : position.coords.longitude,
      accuracy: position.coords.accuracy,
    };

    switch (maskStatus) {
      case 0:
        this.setState({mask_list: this.state.mask_list.concat([[position.coords.latitude, position.coords.longitude]])});
        break;
      case 1:
        this.setState({maskhole_list: this.state.maskhole_list.concat([[position.coords.latitude, position.coords.longitude]])});
        break;
      case 2:
        this.setState({nomask_list: this.state.nomask_list.concat([[position.coords.latitude, position.coords.longitude]])});
        break;
      default:
        this.setState({map_center: [position.coords.latitude, position.coords.longitude]});
    };
  }

  componentDidMount() {
    this.getLocation()
  };


  isUserLggedIn() {

    return this.props.user != null;
  }

  imageClick(maskStatus) {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => this.updateData(position, maskStatus), this.showError, {timeout:5000,enableHighAccuracy:true});
    } else {
      alert("Geolocation error - please refresh page.");
      }

}

getLineSeparator() {
  return <br></br>;
}


render(){

  return (
    <div className="App">

      <header className="App-header">
        <h1><center>MASK MAP</center></h1>
      </header>

      {!this.isUserLggedIn() && this.getLineSeparator()}
      {!this.isUserLggedIn() && this.getLineSeparator()}

      <Emojis onClick = {(param) => this.imageClick(param)}
        mask_list = {this.state.mask_list}
        maskhole_list = {this.state.maskhole_list}
        nomask_list = {this.state.nomask_list}
        mask_status = {this.state.mask_status}
        glasses_im = {this.state.glasses_im}
        maskhole_im = {this.state.maskhole_im}
        nomask_im = {this.state.nomask_im}
        is_user_logged_in = {this.isUserLggedIn()}>
      </Emojis>

      {!this.isUserLggedIn() && <PathMap map_center = {this.state.map_center}
        mask_list = {this.state.mask_list}
        maskhole_list = {this.state.maskhole_list}
        nomask_list = {this.state.nomask_list}/>
      }

    {this.getLineSeparator()}
    {this.getLineSeparator()}

     </div>
    );
  }
}


export default App;
