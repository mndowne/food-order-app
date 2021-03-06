import {Fragment} from "react";

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton.js';

const Header = ({onShowCart}) => {
    return (
    <Fragment> 
        <header className={classes.header} >
            <h1>React Meals</h1>
            <HeaderCartButton onClick={onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="tasty food" />
        </div>
    </Fragment> 
    );
}

export default Header;

