import React from 'react';

import Emoji from './Emoji.js';
import icon1 from './images/icon1.png'
import Grid from '@material-ui/core/Grid';

class Emojis extends React.Component {

render(){
    return (
      <div>

      {!this.props.is_user_logged_in && <Grid container item xs={12} spacing={1}>
          <Emoji img={icon1} function = {() => this.props.onClick(0)}></Emoji>
      </Grid>
      }

      {!this.props.is_user_logged_in && <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <center><h3>{this.props.icon1List.length}</h3></center>
        </Grid>
      </Grid>
    }

      </div>
    );

}

}

export default Emojis;
