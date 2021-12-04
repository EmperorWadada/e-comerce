import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.componenet';
import {auth} from '../firebase/firebase.util'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItemHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user-reducer/user.selector';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>HOME</Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        {
            currentUser ? 
            (<div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>) : (
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>)
        }
        <CartIcon/>
        </div>
        {
            hidden ? null: <CartDropDown/>
        }
        
    </div>
)

// the null value of current user root reducer is now passed in as current user

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

// For nested destructuring 
// Before using Selector
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
// })



// using createStructureSelect help to pass down the appropriate state down to the selectors that needed it
// Instead of : currentUser: selectCurrentUser(state)  AND
//            : hidden: selectCartItemHidden(state)

// WE THEN USE CreateStructureSelect  like this

// After using createStructureSelector 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartItemHidden
})

export default connect(mapStateToProps)(Header)


// A higher order component is a function that accept 
// other component, modify it and return new higher component