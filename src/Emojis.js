import React from 'react';

import Emoji from './Emoji.js';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import Grid from '@material-ui/core/Grid';

class Emojis extends React.Component {

render(){
    return (
      <div>

      {!this.props.is_user_logged_in && <Grid container item xs={12} spacing={1}>
          <Emoji img={icon1} function = {() => this.props.onClick(0)}></Emoji>
          <Emoji img={icon2} function = {() => this.props.onClick(1)}></Emoji>
          <Emoji img={icon3} function = {() => this.props.onClick(2)}></Emoji>
          <Emoji img={icon4} function = {() => this.props.onClick(3)}></Emoji>
      </Grid>
      }

      {!this.props.is_user_logged_in && <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <center><h3>{this.props.icon1List.length}</h3></center>
        </Grid>
        <Grid item xs={3}>
          <center><h3>{this.props.icon2List.length}</h3></center>
        </Grid>
        <Grid item xs={3}>
          <center><h3>{this.props.icon3List.length}</h3></center>
        </Grid>
        <Grid item xs={3}>
          <center><h3>{this.props.icon3List.length}</h3></center>
        </Grid>
      </Grid>
    }

      </div>
    );

}

}

export default Emojis;
