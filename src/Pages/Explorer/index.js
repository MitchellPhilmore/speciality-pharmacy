import React, { useEffect, useContext } from "react";
import Navbar from "../../components/Navbar";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Typography,
  withStyles,
} from "../../../node_modules/@material-ui/core";
import { styles, containerStyle, getMuiTheme, centerLoader } from "./styles";
import { data, tableStyle, columns, options } from "./tableData";
import { store } from "../../Store";
import Loader from "react-loader-spinner";

// make async function

const Explorer = (props) => {
  const GlobalContext = useContext(store);
  const { state, dispatch } = GlobalContext;
  const { classes } = props;
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "IS_LOADING", payload: true });
    }, 8000);
  }, []);

  return (
    <div>
      <Navbar
        remainingSubscriptionTime={state.remainingSubscriptionTime}
        subscription={state.subscriptionLevel}
        loggedIn={true}
        username="Mitch"
      />
      <br />
      <br />
      {state.isLoading ? (
        <Loader
          className="explorer-loader"
          style={centerLoader}
          type="Rings"
          color="#0f2646"
          height={300}
          width={300}
          timeout={8000} //3 secs
        />
      ) : (
        <div>
          <MuiThemeProvider theme={getMuiTheme()}>
            <div style={containerStyle}>
              <MUIDataTable
                title={
                  <Typography
                    className={classes.header}
                    component="h3"
                    variant="h3"
                    gutterBottom
                  >
                    Pharmacy Database
                  </Typography>
                }
                data={data}
                columns={columns}
                options={options}
              />
            </div>
          </MuiThemeProvider>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(Explorer);
