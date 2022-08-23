import React from "react";
import classes from './LoginPage.module.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {uiActions} from '../store/ui-slice';


// template from material UI modified and used as login form
const RegisterPage = () =>{

    const dispatch = useDispatch();

    const LoginHandler =()=>{
        var id = document.getElementById("regid").value;
        var pswd = document.getElementById("regpswd").value;

        if(id==="" || pswd==="")
        alert("Please fill the necessary credentials!!")
        else{
            dispatch(uiActions.addUser({
                id: id,
                password: pswd,
            }));
            document.getElementById("regid").value="";
            document.getElementById("regpswd").value="";
            alert("user registered successfully!!");
            dispatch(uiActions.showLogin());
        }
    }

    return (
        <div className={classes.outercontainer}>
            <div className={classes.container}>
                <h2>Register</h2>
                <div className={classes.input}><Input id="regid" type="email" placeholder="Email Address" /></div>
                <div className={classes.input}><Input id="regpswd" type="password" placeholder="Password"/></div>
                <div className={classes.button}><Button variant="contained" onClick={LoginHandler}>Register</Button></div>
                {/* <a>new User? Create an account</a><br></br> */}
                {/* <a>As the form does not contain any validation you can just click login</a> */}
            </div>
        </div>
    );
}

export default RegisterPage;