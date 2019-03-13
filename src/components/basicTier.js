import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Typography } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Loader from "./Loaders";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";

const columns = [
  {
    name: "pharmacyName",
    label: "Pharmacy Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "URL",
    label: "URL",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "streetAddress",
    label: "Street Address",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: true,
      sort: false
    }
  },

  {
    name: "zip",
    label: "Zip",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "phone",
    label: "Phone",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "conditions",
    label: "Conditions",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "companyType",
    label: "Company Type",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    pharmacyName: "Tiobias Harris Pharmacy",
    URL: "tobias-harris.com",
    streetAddress: "123 Main Street",
    zip: "19145",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "Tobias Harris Conditions",
    companyType: "Tobia Harris Pharmacy"
  },
  {
    pharmacyName: "Tiobias Harris Pharmacy",
    URL: "tobias-harris.com",
    streetAddress: "123 Main Street",
    zip: "19145",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "Tobias Harris Conditions",
    companyType: "Tobia Harris Pharmacy"
  },
  {
    pharmacyName: "Tiobias Harris Pharmacy",
    URL: "tobias-harris.com",
    streetAddress: "123 Main Street",
    zip: "19145",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "Tobias Harris Conditions",
    companyType: "Tobia Harris Pharmacy"
  },
  {
    pharmacyName: "Reddick Pharmacy",
    URL: "reddick-pharmacy.com",
    streetAddress: "123 Main Street",
    zip: "19145",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "Tobias Harris Conditions",
    companyType: "Tobia Harris Pharmacy"
  },
  {
    pharmacyName: "Simmons Pharmacy",
    URL: "simmons-pharmacy.com",
    streetAddress: "123 Main Street",
    zip: "19145",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "Tobias Harris Conditions",
    companyType: "Tobia Harris Pharmacy"
  }
];

const options = {
  selectableRows: false,
  print: false,
  download: false,
  pagination: false,
  checkbox: false,
  responsive: "scroll",
  onRowClick() {
    alert("works");
  }
};

class BasicTier extends Component {
  constructor(props) {
    super(props);
  }

  //Style themes
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableToolbar: {
          root: {
            background: "#424242",
            color: "white"
          },
          actions: {
            position: "absolute"
          }
        },
        MuiPaper:{
          root:{
            maxWidth:'80vw',
            margin:'0 auto',
            overflow:'hidden',
            overflowY:'hidden',
            marginTop:'50px',
            marginBottom:'50px'
          }
        },
        MuiSvgIcon: {
          root: {
            color: "white"
          }
        },
      

        MUIDataTableBodyCell: {
          root: {
            padding: "10px"
          }
        },
        MuiTypography: {
          root: {
            color: "white"
          }
        },
        MuiInputBase:{
          root:{
            color:'white',
            fontSize:'40px',
            textAlign:'right',
            position:'absolute',
            left:'40%',
            fontFamily: 'Pathway Gothic One, sans-serif'
          }
        },
        MUIDataTableHeadCell:{
          root:{
              fontSize:'19px',
              fontFamily: 'Pathway Gothic One, sans-serif'
            }
          
        }
      }
    });

  render() {
    const header = {
      position: "relative",
      left: "380px",
      color: "white",
      textAlign: "left",
      fontFamily: 'Pathway Gothic One, sans-serif'
    };

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={
            <Typography style={header} component="h4" variant="h4" gutterBottom>
              Sample: Basic Teir
            </Typography>
          }
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}

export default BasicTier;
