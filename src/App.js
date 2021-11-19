import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './components/pages/homepage/homepage.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-outpage/sign-in-and-sign-up';
import ShopPage from './components/shop/shop.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.util'

// function App() {
  // converted to class component to be able to set state with firebase loggedin

  class App extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        currentUser: null
      }
    }

    unSubscribeFromAuth = null;

    componentDidMount() {
      this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        // createUserProfileDocument(user)
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
            // 
          })

          this.setState({currentUser: userAuth})
        }
      })
    }

    componentWillUnmount() {
      this.unSubscribeFromAuth();
    }

    render() {
      return(
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
      )
    }
  }
  


export default App;

