import { fabClasses } from "@mui/material";
import { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from './OrderMessage.module.css';

//This message will appear as overlay when order is placed successfully
const OrderMessage=(props)=>{
    return (
        <Fragment>
            <Modal className={classes.container}>
                <span>Order Placed successfully</span> 
                <span className={classes.cross} onClick={props.onClose}>✖</span>
            </Modal>
        </Fragment>
    )
}

export default OrderMessage;