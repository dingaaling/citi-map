import React from 'react';

import Grid from '@material-ui/core/Grid';
import {  Map, TileLayer, Marker } from 'react-leaflet'
import { icon1, icon2, icon3, icon4 } from './icon';

class PathMap extends React.Component {

render(){
    return (
      <div className="leaflet-container">

        <Grid container item xs={12} spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
                <Map center={this.props.mapCenter} zoom={15}>
                <TileLayer
                  attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                {this.props.icon1List.map((position, idx) =>
                  <Marker key={`marker-${idx}`} position={position} icon={ icon1 }>
                  </Marker>
                )}

                {this.props.icon2List.map((position, idx) =>
                  <Marker key={`marker-${idx}`} position={position} icon={ icon2 }>
                  </Marker>
                )}

                {this.props.icon3List.map((position, idx) =>
                  <Marker key={`marker-${idx}`} position={position} icon={ icon3 }>
                  </Marker>
                )}

                {this.props.icon4List.map((position, idx) =>
                  <Marker key={`marker-${idx}`} position={position} icon={ icon4 }>
                  </Marker>
                )}


                </Map>
          </Grid>
          <Grid item xs={2}></Grid>

        </Grid>
        </div>
    );

}

}

export default PathMap;
