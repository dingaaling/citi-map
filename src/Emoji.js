import React from 'react';
import Grid from '@material-ui/core/Grid';

class Emoji extends React.Component {

render(){

  return (
    <Grid item xs={4}>
      <div className="emoji-mask">
        <center><img src={this.props.img} alt={"emoji"} onClick={this.props.function} width="80"/></center>
      </div>
    </Grid>
  );
}

}

export default Emoji;
