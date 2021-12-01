import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './components/pages/homepage/homepage.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-outpage/sign-in-and-sign-up';
import ShopPage from './components/shop/shop.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.util'
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user-reducer/user.action'
// function App() {
  // converted to class component to be able to set state with firebase loggedin

  class App extends React.Component {
    unSubscribeFromAuth = null;

    componentDidMount() {
      const {setCurrentUser} = this.props;

      this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
           userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }); 
          });
        }
        setCurrentUser(userAuth)
      });
     
    }
 

    componentWillUnmount() {
      this.unSubscribeFromAuth();
    }

    render() {
      return(
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
  
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

