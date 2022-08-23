import React from 'react';
import Products from './Products';
import Login from './Login';
import classes from './Options.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { useSelector } from 'react-redux';


//This component shows the options in the right side on the taskbar like Products button,
// login button , and cart icon and number of cart items present 
// Note : The number of cart Item shows only unique items and not the total Items
const Options = (props) => {
    const dispatch = useDispatch();
    const Userlogin = useSelector(state => state.ui.userIsLoggedIn);
    const TotalItems = useSelector(state => state.ui.totalCartItems);

    const ShowCartHandler =()=>{
            if(Userlogin){
            dispatch(uiActions.showCart());
            }
            else{
                alert("Please Login First");
            }
        
        console.log("Yess the cartisshown is true now");
    }

    return (
        <div className={classes.options}>
            <Products/>
            {Userlogin && <span onClick={ShowCartHandler}>Cart {TotalItems}</span>}
            <Login/>
        </div>
    );
  };
  
export default Options;
