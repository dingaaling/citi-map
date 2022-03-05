import React from 'react';
import Grid from '@material-ui/core/Grid';

class Emoji extends React.Component {

render(){

  return (
    <Grid item xs={3}>
      <div className="emoji-class">
        <center><img src={this.props.img} alt={"emoji"} onClick={this.props.function} width="80"/></center>
      </div>
    </Grid>
  );
}

}

export default Emoji;
