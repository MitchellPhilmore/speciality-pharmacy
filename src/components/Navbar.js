import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Button
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Info from "../containers/Info";
import Icon from "@material-ui/core/Icon";
import ManageUsers from "./ManageUsers";

const styles = {
  root: {
    flexGrow: 1,
    width: "300%"
  },
  grow: {
    flexGrow: 1,
    position: "fixed",
    fontFamily: 'Pathway Gothic One, sans-serif'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    fontSize: "200%"
  },
  nav: {
    backgroundColor: "#424242",
    width: "100%"
  },

  links: {
    color: "white",
    fontSize: "20px",
    position: "relative",
    textDecoration: "none",
    left: "25%",
    margin: "20px",
    top: "0",
    textAlign: "center",
    fontFamily: 'Pathway Gothic One, sans-serif',
  
    
  },

  small: {
    lineHeight: "10%",
    fontSize: "70%"
  },
  navItems: {
    color: "white",
    textDecoration: "none",
    position: "fixed",
    right: "25%",
    top: "0",
    fontSize: "80%"
  },
  admin: {
    color: "white",
    textDecoration: "none",
    fontSize: "150%",
    margin: "10px"
  }
};

class ButtonAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  render() {
    let { classes } = this.props;
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

            <Typography variant="h6" color="inherit" className={classes.grow}>
              Speciality Pharmacy Database
            </Typography>

            <Typography variant="h6" color="inherit" className={classes.grow}>
              {this.props.manageUsers}
            </Typography>

            {this.props.loggedIn ? (
              <Grid container>
                <Grid item={12}>
                  <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.navItems}
                  >
                    {`Subscription Level: ${this.props.subscription}`}

                    <Grid item={6}>
                      {`Subscription Status: ${
                        this.props.remainingSubscriptionTime
                      } remaining\n`}
                      <br />
                      <br />
                      <Link
                        className={classes.admin}
                        to={{
                          pathname: "/manageusers",
                          state: { manageUsers: "Manage Users" }
                        }}
                        component={ManageUsers}
                      >
                        User Maintainence
                      </Link>
                    </Grid>

                    <Grid>
                      <Link className={classes.admin} to="explorer">
                        {this.props.edit}
                      </Link>
                    </Grid>
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              false
            )}

            <br />
                  <Button size="small" href="/info" className={classes.links}>
                       {this.props.info}
                  </Button>

            <Link className={classes.links} to="/">
              <Icon className={classes.icon}>account_circle</Icon>
              <small className={classes.small}>{this.props.username}</small>
            </Link>

            {/* {this.props.loggedIn? <Link className={classes.links} to="/"><Icon>arrow_drop_down_circle</Icon></Link> : false}          */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
