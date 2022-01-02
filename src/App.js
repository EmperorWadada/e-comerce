import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './components/pages/homepage/homepage.component';
import CheckOutPage from './components/pages/checkout/checkout.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-outpage/sign-in-and-sign-up';
import ShopPage from './components/shop/shop.component';
// import {auth, createUserProfileDocument} from './components/firebase/firebase.util'
import { connect } from 'react-redux';
import {setCurrentUser, checkUserSession} from './redux/user-reducer/user.action'
import { selectCurrentUser } from './redux/user-reducer/user.selector';
import { createStructuredSelector } from 'reselect';
// import { selectShopData } from './redux/shop/shop-selector';
import ShowUserNameAndEmail from './components/HOC/hoc.component';


// function App() {
  // converted to class component to be able to set state with firebase loggedin

  class App extends React.Component {
    unSubscribeFromAuth = null;

    componentDidMount() {
      // const {setCurrentUser} = this.props;

      // this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      //   if (userAuth) {
      //     const userRef = await createUserProfileDocument(userAuth);
      //      userRef.onSnapshot(snapShot => {
      //      setCurrentUser({
      //         id: snapShot.id,
      //         ...snapShot.data()
      //       }); 
      //     });
      //   }
      //   setCurrentUser(userAuth)
      //   // addCollectionAndDocument('collection', shop.map(({title, items}) => ({title, items})))
      //   // console.log(shop.shopData);

        const {checkUserSession} = this.props;
        checkUserSession();
      };
     
     

    componentWillUnmount() {
      // this.unSubscribeFromAuth();
    }

    render() {
      return(
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path="/checkout" component={CheckOutPage}/>
            <Route exact path="/hoc" component={ShowUserNameAndEmail} />
            <Route exact path='/signin' render={() =>
            this.props.currentUser ? 
            (<Redirect to="/" />) : 
            (<SignInAndSignUpPage/>)
          } />
          </Switch>
        </div>
      )
    }
  }

// We can also use createStructuredSelector just for feature purposes

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
  
const mapDispatchToProps = dispatch => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

