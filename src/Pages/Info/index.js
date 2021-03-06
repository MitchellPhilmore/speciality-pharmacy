import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tier from "../../components/Tiers/";
import BasicTier from "../../components/basicTier";
import ProTier from "../../components/ProTier";
import TierData from "../../components/tierData";
import { Paper, Grid, Button, TextField } from "@material-ui/core";
import MaterialUIForm from "react-material-ui-form";
import { styles, containerStyle } from "./styles";
import { store } from "../../Store/";

const Info = (props) => {
  const GlobalContext = useContext(store);
  const { state, dispatch } = GlobalContext;
  const { classes } = props;
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div>
      <Navbar className={classes.navBar} name="Detailed Info and Plans" />

      <Paper style={containerStyle} className={classes.root}>
        {/* <Grid container>
          <Grid item xs={2} />
          <MaterialUIForm>
            <fieldset className={classes.fieldset}>
              <legend>Search</legend>
              <TextField
                className={classes.inputs}
                label="Conditions"
              ></TextField>
              <TextField className={classes.inputs} label="City"></TextField>
              <TextField
                className={classes.inputs}
                label="Pharmacy Name"
              ></TextField>

              <Button
                className={classes.searchBtns}
                variant="outlined"
                mini={true}
              >
                Find
              </Button>
              <Button
                className={classes.searchBtns}
                color="inherit"
                variant="outlined"
                size="small"
              >
                Match All
              </Button>
            </fieldset>
          </MaterialUIForm> */}
        {/* </Grid> */}

        <TierData />
        <br />
      </Paper>

      <Grid style={containerStyle} container spacing={24}>
        <ProTier />
        <br />
        <br />
        <Grid container spacing={24}>
          <br />
          <br />
          <br />
          <br />
          <BasicTier />
          <br />
          <Grid item xs={3} />
          <Tier />
        </Grid>
        )}
      </Grid>
    </div>
  );
};

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);
