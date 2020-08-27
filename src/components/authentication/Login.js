import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
  withStyles,
  Icon,
} from "@material-ui/core";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import fire from "../../firebase";
import { styles } from "./loginStyles";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


function SignIn(props) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState(false);
  const [password, setPassword] = useState("password");

  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((error) => {
        setInputError(error);
        setInputError(true);
      });
  };

  const handleChange = (e) => {
    // Remove any previous errors
    setInputError(false);

    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {}, []);
  const { classes } = props;
  return (
    <div>
      <Navbar
        loggedIn={false}
        info="Info"
        name="Speciality Pharmacy Database"
      />
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Icon className={classes.iconStyle}>person_pin</Icon>
          <Typography className={classes.signin} component="h1" variant="h5">
            SIGN IN
          </Typography>

          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel error={inputError} htmlFor="email">
                Email
              </InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.login}
                onChange={handleChange}
                error={inputError}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel error={inputError} htmlFor="password">
                Password
              </InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                error={inputError}
              />
            </FormControl>
            <br />
            <br />
            <Link className={classes.signin} to="/info">
              Not a member? Join now
            </Link>
            <br />
            <br />
            <Link className={classes.signin} to="/group">
              Signing in as a group member for the first time? Login here
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              className={classes.submit}
              id="login-btn"
              // href="/explorer"
              onClick={login}
            >
              <Link
                className={classes.linkSignin}
                to={{
                  pathname: user ? "/explorer" : "/",
                  state: {
                    remainingSubscriptionTime: "21 Days",
                    subscriptionLevel: "Pro",
                  },
                }}
              >
                {" "}
                Sign in
              </Link>
            </Button>
          </form>
        </Paper>
      </main>
    </div>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
