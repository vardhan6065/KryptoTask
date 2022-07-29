import { Fragment } from "react";
import Modal from "../UI/Modal";

//This message will appear as overlay when order is placed successfully
const OrderMessage=()=>{
    return (
        <Fragment>
            <Modal>
        Order Placed successfully 
    </Modal>
        </Fragment>
    )
}

export default OrderMessage;