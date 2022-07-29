import React, { Fragment } from "react";
import classes from './Login.module.css';
import { useDispatch } from 'react-redux';
import {uiActions} from '../store/ui-slice';
import { useSelector } from "react-redux";

//Login option in the header which depends on the users login status
const Login = () =>{

    const Userlogin = useSelector(state => state.ui.userIsLoggedIn);

    const dispatch = useDispatch();

    const ShowLoginHandler =()=>{
        dispatch(uiActions.showLogin());
    }

    return (
        <Fragment>
            {/* if user is logged out it will appear as login */}
            {!Userlogin && <span onClick={ShowLoginHandler}>Login</span>}
            {/* if user is logged in it will appear as logout */}
            {Userlogin && <span onClick={ShowLoginHandler}>Logout</span>}
        </Fragment>
    );
}

export default Login;