import MaterialUIForm from "react-material-ui-form";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import React,{Component} from 'react'

import {
    withStyles,
    FormControl,
    Button,
    MenuItem,
    TextField,
    Select,
    InputLabel
} from "@material-ui/core";

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2
    },
    submitBtn: {
        // backgroundColor:'#424242',
        //  color: "white"
    },
    inputs: {
        width: "315px",
        margin:'10px'
    },
    registrationForm: {
        width: "60%",
        margin: "0 auto",
     
    },
    icon: {
        color: "gray",
        fontSize: "90%",
        position:'relative',
        top:'25px',
        margin:'5px'
    },
    legend:{
        fontSize:'200%'
    },
    addUserBtn:{
        backgroundColor:'lightgray'
        
    },
    addIcon:{
        fontSize:'20px',
        margin:'5px'
    },
   
});


 class AddGroupMember extends Component{
    constructor(props){
        super(props)

    }

    render(){
        const {classes} = this.props;

        return(
            <Grid container>
<Grid item={6}>
<Icon className={classes.icon}>account_circle</Icon>
<TextField
    className={classes.inputs}
    label="First Name"
    type="text"
    name="first"
    value=""
    fullWidth
    data-validators="isRequired"
    onChange={this.customInputHandler}/>
    </Grid>
<Grid item={6}>
<Icon className={classes.icon}>account_circle</Icon>
<TextField
    className={classes.inputs}
    label="Last Name"
    type="text"
    name="last"
    value=""
    data-validators="isRequired"
    onChange={this.customInputHandler}/>
</Grid>
<br/>
<br/>
<br/>
<Grid item={6}>
<Icon className={classes.icon}>mail</Icon>

<TextField
    className={classes.inputs}
    label="Email"
    type="email"
    name="email"
    value=""
    data-validators="isRequired,isEmail"
    onChange={this.customInputHandler}/>

</Grid>
<br/>
<br/>
<br/>
<Grid item={6}>
<Icon className={classes.icon}>account_circle</Icon>
<TextField
    className={classes.inputs}
    label="Group Name"
    type="text"
    name="last"
    value=""
    data-validators="isRequired"
    onChange={this.customInputHandler}/>
</Grid>
<br/>
<br/>
<br/>
<Grid item={6}>
 <Icon className={classes.icon}>lock</Icon>
<TextField
    className={classes.inputs}
    label="Password"
    type="password"
    name="password"
    value=""
    data-validators={[
    {
        isLength: {
            min: 6,
            max: 16
        }
    },
    'isAlias'
]}
    onChange={this.customInputHandler}/>
</Grid>
<Grid item={6}>
 <Icon className={classes.icon}>lock</Icon>
<TextField
    className={classes.inputs}
    label="Confirm Password"
    type="password"
    name="passwordConfirm"
    value=""
    data-validators={[
    {
        isLength: {
            min: 6,
            max: 16
        }
    },
    'isAlias'
]}
    onChange={this.customInputHandler}/>
</Grid>
<Grid item={6}>
<TextField
    className={classes.inputs}
    label="Company Name"
    type="text"
    name="companyName"
    value=""
    data-validators="isRequired"
    onChange={this.customInputHandler}/>
</Grid>
<Grid item={6}>
<TextField
    className={classes.inputs}
    label="Job Title"
    type="text"
    name="jobTitle"
    value=""
    data-validators="isRequired"
    onChange={this.customInputHandler}/>
</Grid>
<Grid item={6}>
<TextField
    className={classes.inputs}
    label="Years Of Industry Experience"
    type="text"
    name="jobTitle"
    value=""
    data-validators="isRequired"
    onChange={this.customInputHandler}/>
</Grid>
</Grid>
        )
    }

}


export default withStyles(styles)(AddGroupMember);