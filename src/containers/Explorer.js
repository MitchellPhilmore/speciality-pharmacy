import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MUIDataTable from "mui-datatables";
import Loader from "../components/Loaders";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Typography, withStyles, Grid } from "@material-ui/core";



const styles = theme => ({
  pro: {
    color: "red"
  },
  header: {
    position: "relative",
    left: "380px",
    color: "white"
  }
});



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
  },
  {
    name: "pharmacyContact",
    label: "Pharmacy Contact",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "contactEmail",
    label: "Contact Email",
    options: {
      filter: true,
      sort: false
    }
  },

  {
    name: "accreditation",
    label: "Accreditation",
    options: {
      filter: true,
      sort: false
    }
  },

  {
    name: "Owner_Independent",
    label: "Owner/Independent",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "patientServices",
    label: "Patient Services",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "payerServices",
    label: "Payer Services",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "pharmaServices",
    label: "Pharma Services",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "locations",
    label: "Locations",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "limitedDistributionDrugs",
    label: "Limted Distribution Drugs",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    pharmacyName: "Simmons Pharmacy",
    URL: "Mike Miller",
    streetAddress: "123 Main Street",
    zip: "19145",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  },

  {
    pharmacyName: "Harris Pharmacy",
    URL: "May Johnson",
    streetAddress: "122 S Morris Street",
    zip: "19092",
    city: "Upper Darby",
    state: "PA",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  },

  {
    pharmacyName: "Butler Pharmacy",
    URL: "Kevin Turner",
    streetAddress: "3111 Walker Pk",
    zip: "19131",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  },

  {
    pharmacyName: "Reddick Pharmacy",
    URL: "Mary Venus",
    streetAddress: "1555 S Synder Ave",
    zip: "19143",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  },

  {
    pharmacyName: "Embbid Pharmacy",
    URL: "Kendrick Cole",
    streetAddress: "3000 N Market Street",
    zip: "19128",
    city: "Cherry Hill",
    state: "NJ",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  },

  {
    pharmacyName: "The Process Pharmacy",
    URL: "Darius Mark",
    streetAddress: "988 S Day Street",
    zip: "19092",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  },

  {
    pharmacyName: "Boden Pharmacy",
    URL: "Durrant Curry",
    streetAddress: "3111 Warrior Pk",
    zip: "19127",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  },

  {
    pharmacyName: "Simmons Pharmacy",
    URL: "Kelly Smith",
    streetAddress: "3455 S Synder Ave",
    zip: "19122",
    city: "Trenton",
    state: "NJ",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  },

  {
    pharmacyName: "Mcconnel Pharmacy",
    URL: "Jennifer Moment",
    streetAddress: "3000 N Market Street",
    zip: "19136",
    city: "Philadelphia",
    state: "PA",
    phone: "215-555-5555",
    conditions: "NA",
    companyType: "Family Owned",
    pharmacyContact: "Mr Lee",
    contactEmail: "mlee@gmail.com",
    accreditation: "True",
    Owner_Independent: "Independent",
    patientServices: "NA",
    payerServices: "NA",
    pharmaServices: "NA",
    locations: "1233 Main Street",
    limitedDistributionDrugs: "NA"
  }
];

const options = {
  filterType: "checkbox",
  pagination: false,
  print: false,
  pagination: false,
  download: false
};

const centerLoader = {
  width: "50%",
  position: "absolute",
  top: "50%",
  left: "20%"
};

const tableContainer = {
  width: "3000px",
  margin: "0 auto"
};

 class Explorer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };

    this.isLoading = this.isLoading.bind(this);
  }
  isLoading = () => {
    this.setState({
      isLoading: false
    });
  };
  componentWillMount() {
    setTimeout(this.isLoading, 4000);
  }

  getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MUIDataTable:{
        root:{
          // width:'1000px'
        }
    
      },
      MuiPaper:{
        root:{
          maxWidth:'80vw',
          marginLeft:'100px',
          overflowX:'scroll',
          marginBottom:'50px'
        },
        elevation2:{
          '27':{
            boxShadow:'none',
            overflowX:'hidden',
          
          }
        }
      },
      MUIDataTableToolbar: {
        root: {
          background: "#424242",
          color: "white",

        },
       
     
        actions: {
          position: "absolute"
        }
      },
      MuiSvgIcon: {
        root: {
          color: "white"
        }
      },

      MUIDataTableBodyCell: {
        root: {
          padding: "30px",
          width: "5px",
          maxWidth: "200px",
          marginLeft:'50px'
        }
      }
    }
  });

  render() {
    let { classes } = this.props;
    return (
      this.state.isLoading ? (
        <div style={centerLoader}>
          <Loader />
        </div>
      ) : (
        <div>
          <Navbar
            remainingSubscriptionTime="21 Days"
            subscription="Pro"
            loggedIn={true}
            username="Mitch"
          />
          <br/>
          <br/>
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={
            <Typography
              className={classes.header}
              component="h4"
              variant="h4"
              gutterBottom
            >
              Sample: Pro Tier
            </Typography>
          }
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
      </div>
    )
    )
  }
}
export default withStyles(styles)(Explorer);