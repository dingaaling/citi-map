import React from 'react';

import Emoji from './Emoji.js';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import Grid from '@material-ui/core/Grid';

const Emojis = (props) => {

  return (
    <div>
      {!props.is_user_logged_in && <Grid container item xs={12} spacing={1}>
          <Emoji img={icon1} function = {() => props.onClick(0)}></Emoji>
          <Emoji img={icon2} function = {() => props.onClick(1)}></Emoji>
          <Emoji img={icon3} function = {() => props.onClick(2)}></Emoji>
      </Grid>
      }

      {!props.is_user_logged_in && <Grid container item xs={12} spacing={1}>
        <Grid item xs={4}>
          <center><h3>{props.icon1List.length}</h3></center>
        </Grid>
        <Grid item xs={4}>
          <center><h3>{props.icon2List.length}</h3></center>
        </Grid>
        <Grid item xs={4}>
          <center><h3>{props.icon3List.length}</h3></center>
        </Grid>
      </Grid>
      }
    </div>
  )
}

export default Emojis;
