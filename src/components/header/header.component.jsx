import React from 'react';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.componenet';
import {auth} from '../firebase/firebase.util'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItemHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user-reducer/user.selector';
import { signOutStarts } from '../../redux/user-reducer/user.action';
import './header.style.scss';
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.style'

const Header = ({ currentUser, hidden, signOutStarts }) => (
    <HeaderContainer>
        <LogoContainer to='/'>HOME</LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
        {
            currentUser ? 
            // (<OptionDiv onClick={() => auth.signOut()}>
            // Using saga to sign out
            (<OptionDiv onClick={signOutStarts}>
                SIGN OUT
            </OptionDiv>) : (
            <OptionLink className='option' to='/signin'>
                SIGN IN
            </OptionLink>)
        }
        <CartIcon/> 
        </OptionsContainer>
        {
            hidden ? null: <CartDropDown/>
        }
        
    </HeaderContainer>
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

const mapDispatchToProp = dispatch => ({
    signOutStarts: () => dispatch(signOutStarts())
})

export default connect(mapStateToProps, mapDispatchToProp)(Header)


// A higher order component is a function that accept 
// other component, modify it and return new higher component