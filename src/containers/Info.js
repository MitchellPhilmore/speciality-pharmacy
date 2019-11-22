import React, { Component } from "react";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tier from "../components/Tiers";
import BasicTier from "../components/basicTier";
import ProTier from "../components/ProTier";
import Loader from "../components/Loaders";
import TierData from "../components/tierData";
import { Paper, Grid,Button, TextField  } from "@material-ui/core";
import MaterialUIForm from "react-material-ui-form";


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
   background:'white'
  },
  containerBackground:{
    color:'red'
  },
  fieldset:{
      position:'relative',
      left:'80px'
      
  },
  inputs:{
    margin:'10px',
    fontFamily: 'Pathway Gothic One, sans-serif',
    color:"wheat"
  },
  searchBtns:{
    margin:'10px',
    fontFamily: 'Pathway Gothic One, sans-serif',
    color:"wheat",
    background:"#2f4c6e"
  
  }
});

let containerStyle = {
  background: 'white'
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

        <Grid container>
        <Grid item xs={2}/>
        <MaterialUIForm >
        <fieldset className={classes.fieldset}>
          <legend>
              Search
         </legend>
            <TextField className={classes.inputs} label="Conditions"></TextField>
            <TextField className={classes.inputs} label="City"></TextField>
            <TextField className={classes.inputs} label="Pharmacy Name"></TextField>

            <Button className={classes.searchBtns}  variant="outlined" mini={true}>Find</Button>
            <Button className={classes.searchBtns} color="inherit" variant="outlined" size="small">Match All</Button>

            </fieldset>
        </MaterialUIForm>
        </Grid>
       
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
              <br/>
              <Grid item xs={3}/>
              <Tier/>
             
             
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