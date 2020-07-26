import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Button,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import logo from "../pharmacy-logo.png";
import { store } from "../Store";
import { styles } from "./navStyles";

const ButtonAppBar = (props) => {
  const GlobalState = useContext(store);
  const { state } = GlobalState;

  let { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <br />
          <br />

          <Link className={classes.home} to="/">
            <span className={classes.header}>
              <img
                alt="logo"
                style={{ height: "30px", width: "30px", margin: "5px" }}
                src={logo}
              ></img>
              <h2 className={classes.companyName}>Speciality Pharmacy</h2>
            </span>
          </Link>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.manageUsers}
          </Typography>

          {props.loggedIn ? (
            <Grid container>
              <Grid item={12}>
                <Typography
                  variant="h5"
                  color="inherit"
                  className={classes.navItems}
                >
                  <Grid item={6}>
                    <br />
                    <br />

                    <Button
                      size="small"
                      href="/manageusers"
                      className={classes.links}
                    >
                      Manage Users
                    </Button>
                    <Button
                      size="small"
                      href="/manageusers"
                      className={classes.links}
                    >
                      Subscription Level: {state.subscriptionLevel}
                    </Button>

                    <Button
                      size="small"
                      href="/manageusers"
                      className={classes.links}
                    >
                      Subscription Status:
                      {state.remainingSubscriptionTime}
                    </Button>

                    <Button size="small" href="/info" className={classes.links}>
                      {props.info}
                    </Button>
                  </Grid>

                  <Grid>
                    <Link className={classes.admin} to="explorer">
                      {props.edit}
                    </Link>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          ) : (
            false
          )}

          <br />

          <Link className={classes.links} to="/">
            <Icon className={classes.icon}>account_circle</Icon>
            <small className={classes.small}>{props.username}</small>
          </Link>

          {/* {props.loggedIn? <Link className={classes.links} to="/"><Icon>arrow_drop_down_circle</Icon></Link> : false}          */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
