import React from "react";
import classes from './LoginPage.module.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {uiActions} from '../store/ui-slice';


// template from material UI modified and used as login form
const LoginPage = () =>{

    const dispatch = useDispatch();

    const LoginHandler =()=>{
        dispatch(uiActions.makeUserLogin());
    }

    return (
        <div className={classes.outercontainer}>
            <div className={classes.container}>
                <h2>Login</h2>
                <div className={classes.input}><Input placeholder="Email Address"/></div>
                <div className={classes.input}><Input placeholder="Password"/></div>
                <div className={classes.button}><Button variant="contained" onClick={LoginHandler}>Login</Button></div>
                <a>new User? Create an account</a><br></br>
                <a>As the form does not contain any validation you can just click login</a>
            </div>
        </div>
    );
}

export default LoginPage;