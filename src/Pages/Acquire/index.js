import React, { useRef, useContext } from "react";
import JssProvider from "react-jss/lib/JssProvider";
import MaterialUIForm from "react-material-ui-form";
import Navbar from "../../components/Navbar";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { FormComponent, FormContainer } from "react-authorize-net";
import AddGroupMember from "../../components/AddGroupMember";
import ReactAuthorizeForm from "../../components/React-Authorize.js";
//Material UI Components
import { withStyles, Button, TextField } from "@material-ui/core";
import { store } from "../../Store/";
import { styles } from "./styles";
import "./style.css";

const RegistrationForm = (props) => {
  const GlobalState = useContext(store);
  const { state, dispatch } = GlobalState;
  const { classes } = props;
  const submit = () => {};

  const submitForm = () => {
    // send form data to server
    const {
      firstname,
      lastname,
      username,
      password,
      email,
      companyName,
      jobTitle,
      yearsOfExperience,
      nameOnCard,
      zip,
      street,
      city,
    } = state;
    console.log({
      firstname,
      lastname,
      username,
      password,
      email,
      companyName,
      jobTitle,
      yearsOfExperience,
      nameOnCard,
      zip,
      street,
      city,
    });
  };
  const customInputHandler = (event) => {
    dispatch({
      type: "UPDATE_FORM",
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const addUser = () => {
    dispatch({ type: "ADD_USER" });
  };

  return (
    <div>
      <Navbar name={state.duration + " " + "Subscription Basis"} />
      <br />

      <JssProvider>
        <MaterialUIForm className={classes.registrationForm} onSubmit={submit}>
          <fieldset>
            <legend className={classes.legend}>
              {state.tierName} Registration
            </legend>
            <div className={classes.description}>
              <h4>Subscription Details</h4>
              <h5>Tier: {state.tierName}</h5>
              <h5>Duration: {state.duration}</h5>
              <h5>User Type: {state.userType}</h5>
              <h5>Price: $ {state.price}</h5>
            </div>

            <Grid container>
              <Grid className={classes.grid} item={6}>
              <Icon className={classes.icon}>account_circle</Icon>
                <TextField
                  className={classes.inputs}
                  name="firstname"
                  placeholder="First Name"
                  onChange={customInputHandler}
                />
              </Grid>
              <Grid className={classes.grid} item={6}>
                <Icon className={classes.icon}>account_circle</Icon>
                <TextField
                  className={classes.inputs}
                  name="lastname"
                  placeholder="Last Name"
                  onChange={customInputHandler}
                />
              </Grid>

              <Grid className={classes.grid} item={6}>
                <Icon className={classes.icon}>mail</Icon>

                <TextField
                  className={classes.inputs}
                  label="Email"
                  type="email"
                  name="email"
                  data-validators="isRequired,isEmail"
                  onChange={customInputHandler}
                />
              </Grid>
              <br />
              <br />
              <br />
              <Grid className={classes.grid} item={6}>
                <Icon className={classes.icon}>account_circle</Icon>
                <TextField
                  className={classes.inputs}
                  label="User Name"
                  type="text"
                  name="username"
                  data-validators="isRequired"
                  onChange={customInputHandler}
                />
              </Grid>
              <br />
              <br />
              <br />

              <Grid className={classes.grid} item={6}>
                <Icon className={classes.icon}>lock</Icon>
                <TextField
                  className={classes.inputs}
                  label="Password"
                  type="password"
                  name="password"
                  onChange={customInputHandler}
                  data-validators={[
                    {
                      isLength: {
                        min: 6,
                        max: 16,
                      },
                    },
                    "isAlias",
                  ]}
                />
              </Grid>
              <Grid className={classes.grid} item={6}>
                <Icon className={classes.icon}>lock</Icon>
                <TextField
                  className={classes.inputs}
                  label="Confirm Password"
                  type="password"
                  name="passwordConfirm"
                  data-validators={[
                    {
                      isLength: {
                        min: 6,
                        max: 16,
                      },
                    },
                    "isAlias",
                  ]}
                  onChange={customInputHandler}
                />
              </Grid>
              <Grid className={classes.grid}  item={6}>
              <Icon className={classes.icon}>apartment</Icon>
                <TextField
                  className={classes.inputs}
                  label="Company Name"
                  type="text"
                  name="companyName"
                  data-validators="isRequired"
                  onChange={customInputHandler}
                />
              </Grid>
              <Grid className={classes.grid}  item={6}>
                  <Icon className={classes.icon}>work</Icon>
             
                <TextField
                  className={classes.inputs}
                  label="Job Title"
                  type="text"
                  name="jobTitle"
                  data-validators="isRequired"
                  onChange={customInputHandler}
                />
              </Grid>
              <Grid className={classes.grid}  item={6}>
              <Icon className={classes.icon}>work</Icon>
                <TextField
                  className={classes.inputs}
                  label="Years Of Industry Experience"
                  type="text"
                  name="yearsOfExperience"
                  data-validators="isRequired"
                  onChange={customInputHandler}
                />
              </Grid>
            </Grid>

            <br />
            <br />
            {state.userType === "MULTI (6 MAX)" ? (
              <Button
                color="inherit"
                variant="outlined"
                size="large"
                onClick={addUser}
                className={
                  state.clicked ? classes.removeBtn : classes.addUserBtn
                }
              >
                <Icon className={classes.addIcon}>group_add</Icon>
                Add Users
              </Button>
            ) : null}
            {state.addUser ? (
              <div>
                {state.userCount.map((user) => user)}

                <Button
                  color="inherit"
                  variant="outlined"
                  size="large"
                  onClick={addUser}
                  className={classes.addUserBtn}
                >
                  <Icon className={classes.addIcon}>group_add</Icon>
                  Add Users
                </Button>
              </div>
            ) : (
              false
            )}
            <hr className={classes.hr} />
            <h3 className={classes.center}>Billing information</h3>

            <TextField
              className={classes.inputs}
              label="Name"
              type="text"
              name="nameOnCard"
              data-validators="isRequired"
              onChange={customInputHandler}
            />

            <TextField
              className={classes.inputs}
              label="Street"
              type="text"
              name="street"
              data-validators="isRequired"
              onChange={customInputHandler}
            />
            <TextField
              className={classes.inputs}
              label="City"
              type="text"
              name="city"
              data-validators="isRequired"
              onChange={customInputHandler}
            />
            <TextField
              className={classes.inputs}
              label="state"
              type="text"
              name="state"
              data-validators="isRequired"
              onChange={customInputHandler}
            />
            <TextField
              className={classes.inputs}
              label="Zip"
              type="text"
              name="zip"
              data-validators="isRequired"
              onChange={customInputHandler}
            />

            <br />
            <br />
            <FormContainer
              environment="sandbox"
              amount={state.price}
              component={FormComponent}
            />

            <Button
              className={classes.submitBtn}
              variant="outlined"
              type="submit"
              onClick={submitForm}
            >
              <Icon className={classes.sendIcon}>send</Icon>
              Submit
            </Button>
          </fieldset>
        </MaterialUIForm>
      </JssProvider>
    </div>
  );
};

export default withStyles(styles)(RegistrationForm);
