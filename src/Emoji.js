import React from 'react';
import Grid from '@material-ui/core/Grid';

const Emoji = (props) => {
  
  return (
    <Grid item xs={4}>
      <div className="emoji-class">
        <center><img src={props.img} alt={"emoji"} onClick={props.function} width="80"/></center>
      </div>
    </Grid>
  )
}

export default Emoji;
