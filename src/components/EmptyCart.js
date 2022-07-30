import { fabClasses } from "@mui/material";
import React from "react";
import classes from './EmptyCart.module.css';

const EmptyCart=()=>{
    return (
        <div className={classes.container}>
            <p>You cart is Empty</p>
        </div>
    )
}

export default EmptyCart;