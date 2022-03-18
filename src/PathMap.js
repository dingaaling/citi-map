import React from 'react';

import Grid from '@material-ui/core/Grid';
import {  Map, TileLayer, Marker } from 'react-leaflet'
import { icon1, icon2, icon3 } from './icon';

const PathMap = (props) => {

  return (
    <div className="leaflet-container">
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Map center={props.mapCenter} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          {props.icon1List.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position} icon={ icon1 }>
            </Marker>
          )}

          {props.icon2List.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position} icon={ icon2 }>
            </Marker>
          )}

          {props.icon3List.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position} icon={ icon3 }>
            </Marker>
          )}

          </Map>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  )
}

export default PathMap;
