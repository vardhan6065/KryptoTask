import React,{Fragment} from 'react';
import classes from './Cart.module.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { data } from "../store/db";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const Cart = (props) => {
  const dispatch = useDispatch();
    const cart = useSelector(state => state.ui.cart);
    const Total = useSelector(state => state.ui.totalCartAmount);
    console.log(cart);
    const Products=data.products;

    const MessaheHandler=()=>{
      dispatch(uiActions.showMessage());
    }
    
    

     return (
      <Fragment>
        <div className={classes.cartcontainer}>
          {<div className={classes.cart}>
            <h1>My Cart</h1>

            {/* This is where the whole cart component will appear from the selected items, whose state stored using redux */}
            {<div className={classes.items}>
              {cart.map((item)=>(
                <div className={classes.item}>
                <CartItem
                  id={item.id}
                  image={Products[item.id].image}
                  price={item.price}
                  count={item.count}
                /> 
              </div>
              ))}
            </div>}
          </div>}
          <div className={classes.pricedetails}>
            <h2>Price Details</h2>
              <div className={classes.pricedetailsflexbox}><span>Price</span><span> {Total}</span></div>
              <div className={classes.pricedetailsflexbox}><span>Discount Price</span><span> 100 </span></div>
              <div className={classes.pricedetailsflexbox}><span>Delivery Charges</span><span> 50</span></div>
              <hr></hr>
              <div className={classes.pricedetailsflexbox}><span>Total</span><span> {Total-100+50}</span></div>
          </div>
        </div>
        
        <div className={classes.order}>
        <Button variant="contained" onClick={props.onShowMessage}>Place Order</Button>  
        </div>
      </Fragment>
    );
  };
  
export default Cart