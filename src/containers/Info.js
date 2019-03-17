import React, { Component } from "react";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tier from "../components/Tiers";
import BasicTier from "../components/basicTier";
import ProTier from "../components/ProTier";
import Loader from "../components/Loaders";
import TierData from "../components/tierData";
import { Paper, Grid } from "@material-ui/core";


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },

  table: {
    minWidth: 700
  },
  bold: {
    fontWeight: "bold"
  },
  navBar: {
    width: "100%"
  },
  tierContainer:{
   background:'#f5f5f5 '
  },
  containerBackground:{
    color:'red'
  }
});

let containerStyle = {
  background: 'rgba(189, 189, 189, 0.3)'
}

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

 
class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Turned off loader
      isLoading: false,
      toInfoPage:false
    };
  }

  isLoading = () => {
    this.setState({
      isLoading: false
    });
  };
  componentWillMount() {
    setTimeout(this.isLoading, 4000);
  }

  render() {
    const { classes } = this.props;
    const loaderStyle = {
      width: "80%",
      margin: "0 auto"
    };
    const containerColor = {
      background:'white'
    }
    return (
      <div>
        <Navbar className={classes.navBar} name="Detailed Info and Plans" />
      
         
        <Paper style={containerStyle} className={classes.root}>
        
          <TierData />
          <br />
        </Paper>

        <Grid style={containerStyle}  container spacing={24}>
          {this.state.isLoading ? (
            <Grid item xs={12}>
              <div style={loaderStyle}>
                <Loader />
              </div>
            </Grid>
          ) : (
            <ProTier />
          )}
          <br />
          <br />
      

          {this.state.isLoading ? (
            <Grid container>
              <div style={loaderStyle}>
                <Loader />
              </div>
            </Grid>
          ) : (
            <Grid  container spacing={24}>
             
              <br />
              <br />
              <br />
              <br />
              <BasicTier/>
              
             
              <Grid style={containerColor} item xs={3}>
                <Tier
                  className={classes.card}
                  cost={100}
                  avatar="Basic"
                  name="Basic"
                  duration="7 Days"
                  tierType="Single"
                />
              </Grid>
           
              {/* <Grid item xs={2} /> */}
              <Grid style={containerColor} item xs={3}>
                <Tier
                  className={classes.card}
                  cost={149}
                  avatar="Pro"
                  name="Pro"
                  duration="7 Days"
                  tierType="Single"
                />
              </Grid>

              {/* <Grid item xs={2} /> */}
              <Grid style={containerColor} item xs={3}>
                <Tier
                  className={classes.card}
                  cost={500}
                  avatar="Basic"
                  name="Basic"
                  duration="1 Month"
                  tierType="Single"
                />
              </Grid>
              {/* <Grid item xs={2}/> */}
              <Grid style={containerColor}  item xs={3}>
                <Tier
                  className={classes.card}
                  cost={1000}
                  avatar="Pro"
                  name="Pro"
                  duration="1 Month"
                  teirType="Single"
                />
              </Grid>
              <Grid style={containerColor}  item xs={3}>
                <Tier
                  className={classes.card}
                  cost={1250}
                  avatar="Basic"
                  name="Basic"
                  duration="12 Months"
                  tierType="Single"
                />
              </Grid>
              <Grid style={containerColor}  item xs={3}>
                <Tier
                  className={classes.card}
                  cost={3500}
                  avatar="Pro"
                  name="Pro"
                  duration="12 Months"
                  tierType="Single"
                />
              </Grid>
              <Grid style={containerColor}  item xs={3}>
                <Tier
                  className={classes.card}
                  cost={250}
                  avatar="Basic"
                  name="Basic Multi-Users"
                  duration="7 Days"
                  tierType="Multiple Users"
                />
              </Grid>
              <Grid style={containerColor}  item xs={3}>
                <Tier
                  className={classes.card}
                  cost={750}
                  avatar="Pro"
                  name="Pro Multi-Users"
                  duration="7 Days"
                  tierType="Multiple Users"
                />
              </Grid>
              
            </Grid>
          
          
          )}
        </Grid>

        </div>
    
      
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);