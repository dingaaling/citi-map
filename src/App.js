import React, {useState, useEffect} from 'react';
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

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { firebaseConfig } from './config.js'

//Styling
import './App.css'
const startLat = 51.510940
const startLon = -0.117977
const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = () => {
  const [mapCenter, setMapCenter] = useState([startLat, startLon]);
  const [dataDict, setDataDict] = useState([]);
  const [icon1List, setIcon1List] = useState([]);
  const [icon2List, setIcon2List] = useState([]);
  const [icon3List, setIcon3List] = useState([]);

  useEffect(() => {
    getLocation()
  }, [])

  function showPosition(position) {
    console.log("Logging at: " + position.coords.latitude.toString() +", "+ position.coords.longitude.toString());
    setMapCenter([position.coords.latitude, position.coords.longitude]);
  }

  function showError(error) {

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

  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError, {timeout:20000,enableHighAccuracy:true});
      } else {
          alert("Geolocation is not supported by this browser. To log data, please enable Location Services for your browser.");
      }
  }

  function updateData(position, iconStatus) {

    let body = {
      timestamp: new Date().toUTCString(),
      iconStatus: iconStatus,
      latitude : position.coords.latitude,
      longitude : position.coords.longitude,
      accuracy: position.coords.accuracy,
    };

    setDataDict(oldArray => [...oldArray, body])
    
    /*
    Uncomment this line if you need to use a firebase realtime database
    */
    
    console.log(body)
    firebaseApp.database().ref('/').push(body);

    switch (iconStatus) {
      case 0:
        setIcon1List(oldArray => [...oldArray, [position.coords.latitude, position.coords.longitude]]);
        break;
      case 1:
        setIcon2List(oldArray => [...oldArray, [position.coords.latitude, position.coords.longitude]]);
        break;
      case 2:
        setIcon3List(oldArray => [...oldArray, [position.coords.latitude, position.coords.longitude]]);
        break;
      default:
        setMapCenter([position.coords.latitude, position.coords.longitude]);
    };
  }

  function imageClick(iconStatus) {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => updateData(position, iconStatus), showError, {timeout:5000,enableHighAccuracy:true});
    } else {
      alert("Geolocation error - please refresh page.");
    }
  }

  function getLineSeparator() {
    return <br></br>;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1><center>CITI MAP</center></h1>
      </header>

      {getLineSeparator()}
      {getLineSeparator()}

      <Emojis onClick = {(param) => imageClick(param)}
        icon1List = {icon1List}
        icon2List = {icon2List}
        icon3List = {icon3List}
        > 
      </Emojis>

      {<PathMap mapCenter = {mapCenter}
        icon1List = {icon1List}
        icon2List = {icon2List}
        icon3List = {icon3List}/>
      }
      
      {getLineSeparator()}
      {getLineSeparator()}
      <Box textAlign='center'><Button variant="contained"><CSVLink data={dataDict}>Download CSV</CSVLink></Button></Box>    {getLineSeparator()}
      {getLineSeparator()}
    </div>
  )
}

export default App;
