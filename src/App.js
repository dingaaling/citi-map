import React from 'react';
import {CSVLink} from 'react-csv';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

//Internal Classes
import Emojis from './Emojis.js';
import PathMap from './PathMap.js'

/*
Firebase support. Uncomment these imports if you want to connect the app
with a realtime fire database
*/

/*
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { firebaseConfig } from './config.js'
*/

//Styling
import './App.css'
const startLat = 40.742997028
const startLon = -73.96749613

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { mapCenter : [startLat, startLon], dataDict : [],
                  icon1List : [], icon2List : [], icon3List : []};
    this.showPosition = this.showPosition.bind(this)
    this.imageClick = this.imageClick.bind(this)
    this.updateData = this.updateData.bind(this)

  }

  showPosition(position) {
      // console.log("Logging at: " + position.coords.latitude.toString() +", "+ position.coords.longitude.toString());
      this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude, mapCenter : [position.coords.latitude, position.coords.longitude]});
  }

  showError(error) {

    const errorMessage =  { code : 1, message : "Location Settings error" };

    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation. To log data, please enable Location Services for your browser.")
        throw errorMessage;
      case error.TIMEOUT:
        alert("To log data, please enable Location Services for your browser.")
        throw errorMessage;
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
      iconStatus: iconStatus,
      latitude : position.coords.latitude,
      longitude : position.coords.longitude,
      accuracy: position.coords.accuracy,
    };

    /*
    Uncomment this line if you need to use a firebase realtime database
    */
    /*
    firebaseApp.database().ref('/').push(body);
    */
    this.setState({dataDict: this.state.dataDict.concat(body)});

    switch (iconStatus) {
      case 0:
        this.setState({icon1List: this.state.icon1List.concat([[position.coords.latitude, position.coords.longitude]])});
        break;
      case 1:
        this.setState({icon2List: this.state.icon2List.concat([[position.coords.latitude, position.coords.longitude]])});
        break;
      case 2:
        this.setState({icon3List: this.state.icon3List.concat([[position.coords.latitude, position.coords.longitude]])});
        break;
      default:
        this.setState({mapCenter: [position.coords.latitude, position.coords.longitude]});
    };
  }

  componentDidMount() {
    this.getLocation()
  };


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

      {this.getLineSeparator()}
      {this.getLineSeparator()}

      <Emojis onClick = {(param) => this.imageClick(param)}
        icon1List = {this.state.icon1List}
        icon2List = {this.state.icon2List}
        icon3List = {this.state.icon3List}
        iconStatus = {this.state.iconStatus}>
      </Emojis>

      {<PathMap mapCenter = {this.state.mapCenter}
        icon1List = {this.state.icon1List}
        icon2List = {this.state.icon2List}
        icon3List = {this.state.icon3List}/>
      }

    {this.getLineSeparator()}
    {this.getLineSeparator()}
    <Box textAlign='center'><Button variant="contained"><CSVLink data={this.state.dataDict}>Download CSV</CSVLink></Button></Box>    {this.getLineSeparator()}
    {this.getLineSeparator()}


     </div>
    );
  }
}


export default App;
