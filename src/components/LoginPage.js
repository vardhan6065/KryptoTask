import React from "react";
import classes from './LoginPage.module.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {uiActions} from '../store/ui-slice';
import { useSelector } from 'react-redux';



// template from material UI modified and used as login form
const LoginPage = () =>{
    const credentials = useSelector(state => state.ui.users);

    const dispatch = useDispatch();

    const LoginHandler =()=>{
        var id = document.getElementById("id").value;
        var pswd = document.getElementById("pswd").value;
        
        if(id==="vardhan@gmail.com" && pswd==="12345")
        dispatch(uiActions.makeUserLogin());
        else if(id===credentials[1].id && pswd===credentials[1].password){
            dispatch(uiActions.makeUserLogin());
        }
        else
        alert("Please type correct credentials, you are provided with one!!");
    }

    const RegisterHandler=()=>{
        dispatch(uiActions.RegisterPage());
    }

    return (
        <div className={classes.outercontainer}>
            <div className={classes.container}>
                <h2>Login</h2>
                <div className={classes.input}><Input id="id" type="email" placeholder="Email Address" /></div>
                <div className={classes.input}><Input id="pswd" type="password" placeholder="Password"/></div>
                <div className={classes.button}><Button variant="contained" onClick={LoginHandler}>Login</Button></div>
                <a onClick={RegisterHandler}>new User? Create an account</a><br></br>
                {/* <a>As the form does not contain any validation you can just click login</a> */}
            </div>
        </div>
    );
}

export default LoginPage;