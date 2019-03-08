import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import {Typography} from '@material-ui/core'
import MUIDataTable from "mui-datatables";
import Loader from './Loaders'


 

            const columns = [
                {
                 name: "pharmacyName",
                 label: "Pharmacy Name",
                 options: {
                  filter: true,
                  sort: true,
                 }
                },
                {
                 name: "URL",
                 label: "URL",
                 options: {
                  filter: true,
                  sort: false,
                 }
                },
                {
                 name: "streetAddress",
                 label: "Street Address",
                 options: {
                  filter: true,
                  sort: false,
                 }
                },
                {
                 name: "city",
                 label: "City",
                 options: {
                  filter: true,
                  sort: false,
                 }
                },
                {
                 name: "state",
                 label: "State",
                 options: {
                  filter: true,
                  sort: false,
                 }
                },
                
                {
                 name: "zip",
                 label: "Zip",
                 options: {
                  filter: true,
                  sort: false,
                 }
                },
                {
                  name: "phone",
                  label: "Phone",
                  options: {
                   filter: true,
                   sort: false,
                  }
                 },
                 {
                  name: "conditions",
                  label: "Conditions",
                  options: {
                   filter: true,
                   sort: false,
                  }
                 },
                 {
                  name:"companyType",
                  label:"Company Type",
                  options: {
                   filter: true,
                   sort: false,
                  }
                 }]

                 const data = [
                    { pharmacyName: "Tiobias Harris Pharmacy", 
                      URL: "tobias-harris.com",
                     streetAddress: "123 Main Street",
                     zip:"19145",
                     city: "Philadelphia",
                     state:"PA",
                     phone:"215-555-5555",
                     conditions:"Tobias Harris Conditions",
                     companyType:"Tobia Harris Pharmacy",
                 },
                    { pharmacyName: "Tiobias Harris Pharmacy", 
                      URL: "tobias-harris.com",
                     streetAddress: "123 Main Street",
                     zip:"19145",
                     city: "Philadelphia",
                     state:"PA",
                     phone:"215-555-5555",
                     conditions:"Tobias Harris Conditions",
                     companyType:"Tobia Harris Pharmacy",
                 },
                    { pharmacyName: "Tiobias Harris Pharmacy", 
                      URL: "tobias-harris.com",
                     streetAddress: "123 Main Street",
                     zip:"19145",
                     city: "Philadelphia",
                     state:"PA",
                     phone:"215-555-5555",
                     conditions:"Tobias Harris Conditions",
                     companyType:"Tobia Harris Pharmacy",
                 },
                    { pharmacyName: "Reddick Pharmacy", 
                      URL: "reddick-pharmacy.com",
                     streetAddress: "123 Main Street",
                     zip:"19145",
                     city: "Philadelphia",
                     state:"PA",
                     phone:"215-555-5555",
                     conditions:"Tobias Harris Conditions",
                     companyType:"Tobia Harris Pharmacy",
                 },
                    { pharmacyName: "Simmons Pharmacy", 
                      URL: "simmons-pharmacy.com",
                     streetAddress: "123 Main Street",
                     zip:"19145",
                     city: "Philadelphia",
                     state:"PA",
                     phone:"215-555-5555",
                     conditions:"Tobias Harris Conditions",
                     companyType:"Tobia Harris Pharmacy",
                 }]
              
    
 
                 const options = {
                  selectableRows: false,
                  print:false,
                  download:false,
                  pagination:false,
                  checkbox:false,
                  responsive: 'scroll',
                  onRowClick(){
                    alert('works')
                  }
                };
 
  export default class ProTier extends Component {
    constructor(props){
      super(props)
  
      
    }
  
  
    render() {
      const header = {
        textAlign:'center'
      }
   
      return (
      
  <MUIDataTable 
    
    title={ 
    <Typography style={header} component="h4" variant="h4" gutterBottom>
    Sample:  Basic Teir
 </Typography>} 
    data={data}
    columns={columns}
    options={options}
  />
  
      )
    }
  }
               
                  
                 
               