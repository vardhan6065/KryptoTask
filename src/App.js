import { Fragment } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import ProductsPage from './components/ProductsPage';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';
import OrderMessage from './components/OrderMessage';
import { useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import EmptyCart from './components/EmptyCart';
import RegisterPage from './components/RegisterPage';

function App() {  
  const [messageIsShown, setMessageIsShown]=useState(false);
  const dispatch = useDispatch();
  // const messageIsShown = useSelector(state => state.ui.messageIsShown);
  const login = useSelector(state => state.ui.LoginPageIsVisible);
  const product = useSelector(state => state.ui.ProductsPageIsVisible);
  const userLoggedIn = useSelector(state => state.ui.userIsLoggedIn);
  const cartIsvisible = useSelector(state => state.ui.CartIsVisible);
  const totalCartItems = useSelector(state => state.ui.totalCartItems);
  const RegisterPageIsVisible = useSelector(state => state.ui.RegisterPageIsVisible);



  const showMessageHandler=()=>{
    setMessageIsShown(true);
  }
  const hideMessageHandler=()=>{
    setMessageIsShown(false);
  }
  // const hideMessageHandler=()=>{
  //   dispatch(uiActions.hideMessage());
  // }

  return (
    <Fragment>
      {messageIsShown && <OrderMessage onClose={hideMessageHandler}/>}
      <div className="App">
        <Header/>
      </ div>
      <div className='container'>
        {userLoggedIn && product && <ProductsPage/>}
        {login && !userLoggedIn && <LoginPage/>}
        {RegisterPageIsVisible && <RegisterPage/>}
        {totalCartItems>0 && cartIsvisible && <Cart onShowMessage={showMessageHandler}/>}
        {!totalCartItems && cartIsvisible && <EmptyCart/>}
      </div>
      {login && !userLoggedIn && <div className='credentials'>
      <p>Credentials:  
        <br/>Email : vardhan@gmail.com
        <br/>Password : 12345
      </p>
      </div>}
    </Fragment>
  );
}

export default App;
