import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './components/pages/homepage/homepage.component'
import ShopPage from './components/shop/shop.component';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;

