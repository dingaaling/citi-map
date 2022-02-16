import React from 'react';

//Internal Classes
import Emojis from './Emojis.js';
import PathMap from './PathMap.js'

//Styling
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { map_center : [40.742997028, -73.96749613],
                  icon1_list : [], icon2_list : [], icon3_list : []};
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

  updateData(position, iconStatus) {

    let body = {
      timestamp: new Date().toUTCString(),
      icon_status: iconStatus,
      latitude : position.coords.latitude,
      longitude : position.coords.longitude,
      accuracy: position.coords.accuracy,
    };

    switch (iconStatus) {
      case 0:
        this.setState({icon1_list: this.state.icon1_list.concat([[position.coords.latitude, position.coords.longitude]])});
        break;
      case 1:
        this.setState({icon2_list: this.state.icon2_list.concat([[position.coords.latitude, position.coords.longitude]])});
        break;
      case 2:
        this.setState({icon3_list: this.state.icon3_list.concat([[position.coords.latitude, position.coords.longitude]])});
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

  imageClick(iconStatus) {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => this.updateData(position, iconStatus), this.showError, {timeout:5000,enableHighAccuracy:true});
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
        icon1_list = {this.state.icon1_list}
        icon2_list = {this.state.icon2_list}
        icon3_list = {this.state.icon3_list}
        icon_status = {this.state.icon_status}
        is_user_logged_in = {this.isUserLggedIn()}>
      </Emojis>

      {!this.isUserLggedIn() && <PathMap map_center = {this.state.map_center}
        icon1_list = {this.state.icon1_list}
        icon2_list = {this.state.icon2_list}
        icon3_list = {this.state.icon3_list}/>
      }

    {this.getLineSeparator()}
    {this.getLineSeparator()}

     </div>
    );
  }
}


export default App;
