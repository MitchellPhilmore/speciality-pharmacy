import React, { Component } from "react";   
import PropTypes from 'prop-types';
import {Typography,withStyles}  from '@material-ui/core'
import {Link } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const header = {
  position:'relative',
    left:'480px',
     color:'white'
}

const linkColumn = {
  width:'500%',


}
const columns = [
  {
    name: "access",
    label: "Access",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "duration",
    label: "Duration",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "userType",
    label: "User Type",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "numOfRecords",
    label: "Number Of Records",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "cost",
    label: "Cost",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "renewable",
    label: "Re-newable",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "trial",
    label: "Trial",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {  
    access: 
    <Link style={linkColumn} to={{pathname:"/acquire",
    state:{tierName:'Basic',
    cost:'100',
    userType:'Single',
    duration:'7 Day'}}}>
    Basic
    </Link>,

    duration: "7 Day",
    userType: "Single",
    cost: "$100",
    numOfRecords: "25",
    renewable: "Yes",
    trial: "Yes"
  },
  {
    access: <Link to={{
        pathname:"/acquire",
        state:{tierName:'Pro',
        cost:'149',userType:'Single',
        duration:'7 Days'}}}
      >Pro</Link>,

    duration: "7 Days",
    userType: "Single",
    cost: "$149",
    numOfRecords: "50",
    renewable: "Yes",
    trial: "Yes"
  },
  {
    access: 
       <Link to={{
        pathname:"/acquire",
        state:{tierName:'Basic',
        cost:'500',userType:'Single',
        duration:'1 Month'}}}
      >Basic</Link>,

    duration: "1 Month",
    userType: "Single",
    cost: "$500",
    numOfRecords: "Entire Database",
    renewable: "Yes",
    trial: "Yes"
  },
  {
    access: 
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Pro',
        cost:'1000',userType:'Single',
        duration:'1 Month'}}}
      >Pro</Link>,

    duration: "1 Month",
    userType: "Single",
    cost: "$1000",
    numOfRecords: "Entire Database",
    renewable: "Yes",
    trial: "No"
  },
  {
    access:
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Basic',
        cost:'1250',userType:'Single',
        duration:'12 Months'}}}
      >Basic</Link>,

    duration: "12 Month",
    userType: "Single",
    cost: "$1250",
    numOfRecords: "Entire Database",
    renewable: "Yes",
    trial: "No"
  },
  {
    access: 
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Pro',
        cost:'3500',userType:'Single',
        duration:'12 Months'}}}
      >Pro
    </Link>,
    duration: "12 Month",
    userType: "Single",
    cost: "$3500",
    numOfRecords: "Entire Database",
    renewable: "Yes",
    trial: "No"
  },
  {
    access: 
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Basic',
        cost:'250',userType:'Multi',
        duration:'7 Day'}}}
      >Basic
   </Link>,
    duration: "7 Day",
    userType: "Multi (6 Max)",
    cost: "$250",
    numOfRecords: "50",
    renewable: "Yes",
    trial: "Yes"
  },
  {
    access: 
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Pro',
        cost:'750',userType:'Multi',
        duration:'7 Day'}}}
      >Pro
    </Link>,
    duration: "7 Day",
    userType: "Multi (6 Max)",
    cost: "$750",
    numOfRecords: "25",
    renewable: "Yes",
    trial: "Yes"
  },
  {
    access: 
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Basic',
        cost:'1250',userType:'Multi',
        duration:'1 Month'}}}
      >Basic
    </Link>,
    duration: "1 Month",
    userType: "Multi (6 Max)",
    cost: "$1250",
    numOfRecords: "Entire Database",
    renewable: "Yes",
    trial: "No"
  },
  {
    access: 
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Pro',
        cost:'2750',userType:'Multi',
        duration:'1 Month'}}}
      >Pro
    </Link>,
    duration: "1 Month",
    userType: "Multi (6 Max)",
    cost: "$2750",
    numOfRecords: "Entire Database",
    renewable: "Yes",
    trial: "No"
  },
  {
    access: 
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Basic',
        cost:'3500',userType:'Multi',
        duration:'12 Months'}}}
      >Basic
    </Link>,
    duration: "12 Month",
    userType: "Multi (6 Max)",
    cost: "$3500",
    numOfRecords: "Entire Database",
    renewable: "Yes",
    trial: "No"
  },
  {
    access: 
    <Link to={{
        pathname:"/acquire",
        state:{tierName:'Pro',
        cost:'11500',userType:'Multi',
        duration:'12 Months'}}}
      >Pro
    </Link>,
    duration: "12 Month",
    userType: "Multi (6 Max)",
    cost: "$11500",
    numOfRecords: "Entire Database",
    renewable: "Yes",
    trial: "No"
  }
];
const options = {
  selectableRows: false,
  print:false,
  download:false,
  checkbox:false,
  pagination:false,
  elevation:4,
  reponsive:'stacked',
  onRowClick(rowData){
   console.log(rowData)
  }
};

const styles = {
  action:{
    background:'blue'
  }
}


  class TeirData extends Component {
  constructor(props) {
    super(props);
}

  //Style themes
  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableToolbar:{
        root:{
          background:'#424242',
          color:'white',
         
        },
        actions:{
          position:'absolute',
         },
         
      },
      MuiSvgIcon:{
        root:{
           color:'white'
        }
      },
     
      MUIDataTableBodyCell: {
        root: {
          padding:'30px',
          width:'10px',
          maxWidth:'200px'
        }
      }
    }
  })

  render() {
  const  {classes} = this.props
    return (
  <MuiThemeProvider theme={this.getMuiTheme()}>
  <MUIDataTable  title={ 
      <Typography style={header} component="h3" variant="h3" gutterBottom>
      Tier Plans
    </Typography>} 
    data={data} columns={columns} options={options}/>
    </MuiThemeProvider>
   
    );
  }
}
     
export default withStyles(styles)(TeirData);