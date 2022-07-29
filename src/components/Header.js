import React,{Fragment} from 'react';
import classes from './Header.module.css';
import Options from './Options';


//This commponent shows the top header taskbar
const Header = (props) => {
     return (
      <Fragment>
        <header className={classes.header}>
        <div className={classes['logo-title']}>
            <div >
                <h1 className={classes['title-nam']}>ShopKart.</h1>
            </div>
        </div>
        <div className={classes.options}>
            <Options/>
        </div>
        </header>
      </Fragment>
    );
  };
  
export default Header;
