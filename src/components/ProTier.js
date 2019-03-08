import React, { Component } from "react";
import Navbar from "./Navbar";
import {Typography,withStyles} from '@material-ui/core'
import MUIDataTable from "mui-datatables";
import Loader from "./Loaders";


const styles = theme => ({
   pro:{
     color:'red'
     
   },
   header:{
     textAlign:'center'
   }
})



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
      sort: false,
        
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
  }
];

const options = {
  selectableRows: false,
  print:false,
  pagination:false,
  download:false,
  checkbox:false,
  reponsive:'stacked',
  onRowClick(){
    alert('works')
  }
};

const centerLoader = {
  width: "30%",
  position: "absolute",
  top: "25%",
  left: "20%"
};

const tableContainer = {
  width: "3000px",
  margin: "0 auto"
};

 class ProTier extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {classes} = this.props
    return (
      <MUIDataTable
        title={  
        <Typography  className={classes.header} component="h4" variant="h4" gutterBottom>
         Sample: Pro Tier
      </Typography>} 
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

 export default withStyles(styles)(ProTier);