// Here the state of different objects and components is managed using Redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    
    name: 'ui',
    initialState: {
        users:[{"id":"vardhan@gmail.com", "password":"12345"}],
        cart:[],
        totalCartAmount:0,
        totalCartItems:0,
        userIsLoggedIn:false,
        CartIsVisible: false,
        LoginPageIsVisible: true,
        ProductsPageIsVisible: false,
        messageIsShown: false,
    },
    reducers : {
        makeUserLogin(state){
            state.userIsLoggedIn= true;
            state.LoginPageIsVisible= false;
            state.ProductsPageIsVisible=true;
        },
        showLogin(state){
            state.userIsLoggedIn= false;
            state.LoginPageIsVisible= true;
            state.ProductsPageIsVisible=false;
            state.CartIsVisible=false;
        },
        showProducts(state){
            state.ProductsPageIsVisible=true;
            state.CartIsVisible=false;
            state.LoginPageIsVisible= false;
        },
        showCart(state){
            state.ProductsPageIsVisible=false;
            state.LoginPageIsVisible= false;
            state.CartIsVisible= true;
        },
        showMessage(state){
            state.messageIsShown= true;
        },
        hideMessage(state){
            state.messageIsShown= false;
        },
        addItem(state,action){
            const newItem = action.payload;
            const existingItems = state.cart.find(item=>item.id===newItem.id);
            if(!existingItems){
                state.cart.push({
                    id: newItem.id,
                    price: newItem.price,
                    count : 1,
                });
                state.totalCartAmount+=parseInt(newItem.price);
                state.totalCartItems+=1;
            }else{
                existingItems.count++;
                state.totalCartAmount+=parseInt(newItem.price);
            }
        },
        removeItem(state,action){
                const removeItem = action.payload;
                const existingItems = state.cart.find(item=>item.id===removeItem.id);
    
                if(existingItems.count>1){
                    existingItems.count -= 1;
                    state.totalCartAmount-=existingItems.price;
                }
                else{
                    if(state.totalCartItems===1)
                    state.totalCartItems=0;
                    state.cart = state.cart.filter(item => item.id !== removeItem.id);
                    state.totalCartAmount-=removeItem.price;
                }
                
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;