import React from "react";
import classes from './Products.module.css';
import { useDispatch } from 'react-redux';
import {uiActions} from '../store/ui-slice';
import { useSelector } from "react-redux";


// This is again the product button component which navigates to the products section
const Products = () =>{
    const dispatch = useDispatch();
    const Userlogin = useSelector(state => state.ui.userIsLoggedIn);


    const ShowProductsHandler =()=>{
        if(Userlogin){
            dispatch(uiActions.showProducts());
        }
        else{
            alert("Please Login First");
        }
    }

    return (
        <span className={classes.option} onClick={ShowProductsHandler}>Products</span>
    );
}

export default Products;