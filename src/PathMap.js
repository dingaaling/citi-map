import React from 'react';

import Grid from '@material-ui/core/Grid';
import {  Map, TileLayer, Marker } from 'react-leaflet'
import { iconGlasses, iconMaskhole, iconNoMask } from './icon';

class PathMap extends React.Component {

render(){
    return (
      <div className="leaflet-container">

        <Grid container item xs={12} spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
                <Map center={this.props.map_center} zoom={15}>
                <TileLayer
                  attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                {this.props.mask_list.map((position, idx) =>
                  <Marker key={`marker-${idx}`} position={position} icon={ iconGlasses }>
                  </Marker>
                )}

                {this.props.maskhole_list.map((position, idx) =>
                  <Marker key={`marker-${idx}`} position={position} icon={ iconMaskhole }>
                  </Marker>
                )}

                {this.props.nomask_list.map((position, idx) =>
                  <Marker key={`marker-${idx}`} position={position} icon={ iconNoMask }>
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
