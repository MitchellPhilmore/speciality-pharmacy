import React, { useEffect, useContext } from "react";
import Navbar from "../../components/Navbar";
import MUIDataTable from "mui-datatables";
import {MuiThemeProvider } from "@material-ui/core/styles";
import { Typography,withStyles} from "../../../node_modules/@material-ui/core";
import { styles,containerStyle, getMuiTheme, centerLoader } from "./styles";
import { data, tableStyle, columns, options } from "./tableData";
import { store } from "../../Store";
import Loader from "react-loader-spinner";

// make async function

const Explorer = (props) => {
  const GlobalContext = useContext(store);
  const { state, dispatch } = GlobalContext;
  const { classes } = props;
  useEffect(()=>{
    setTimeout(() => {
      dispatch({ type: "IS_LOADING", payload: true });
    }, 5000);
  },[])

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
          timeout={5000} //3 secs
        />
      ) : (
        <div>
          <MuiThemeProvider theme={getMuiTheme()}>
            <div style={containerStyle}>
              <MUIDataTable
                title={
                  <Typography
                    className={classes.header}
                    component="h4"
                    variant="h4"
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
