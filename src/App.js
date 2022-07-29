import { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import ProductsPage from './components/ProductsPage';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';
import OrderMessage from './components/OrderMessage';
import { useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';

function App() {  
  const dispatch = useDispatch();
  const messageIsShown = useSelector(state => state.ui.messageIsShown);
  const login = useSelector(state => state.ui.LoginPageIsVisible);
  const product = useSelector(state => state.ui.ProductsPageIsVisible);
  const userLoggedIn = useSelector(state => state.ui.userIsLoggedIn);
  const cartIsvisible = useSelector(state => state.ui.CartIsVisible);

  const hideMessageHandler=()=>{
    dispatch(uiActions.hideMessage());
  }

  return (
    <Fragment>
      {messageIsShown && <OrderMessage onClose={hideMessageHandler}/>}
      <div className="App">
        <Header/>
      </ div>
      <div className='container'>
        {userLoggedIn && product && <ProductsPage/>}
        {login && !userLoggedIn && <LoginPage/>}
        {cartIsvisible && <Cart/>}
      </div>
    </Fragment>
  );
}

export default App;
