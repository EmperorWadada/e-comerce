import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {auth} from '../firebase/firebase.util'

import './header.style.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>HOME</Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
        {
            currentUser ? 
            (<div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>) : (
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>)
        }
    </div>
)

// the null value of current user root reducer is now passed in as current user

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)


// A higher order component is a function that accept 
// other component, modify it and return new higher component