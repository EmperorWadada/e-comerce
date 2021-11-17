import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/homepage/homepage.component'

const HatPage = (props) => {
  console.log(props);
  return(
  <div>
    <p>Welcome to HatPage</p>
    <Link to={`${props.match.url}/1`} >hate page 1</Link>
    <Link to={`${props.match.url}/2`} >hate page 2</Link>
    <Link to={`${props.match.url}/3`} >hate page 3</Link>
  </div>
)
}

const Course = () => (
  <div>
    <p>Welcome to Course</p>
  </div>
)

const HatId = (props) => {
  console.log(props);
  return(
    <div>
    <p>Your hat id is: {props.match.params.hatid}</p>
  </div>
  )
}

function App() {
  return(
    <div>
        <Route exact path='/' component={Homepage} />
        <Route path='/commit/forthe/hats' component={HatPage} />
        <Route path='/commit/forthe/hats/:hatid' component={HatId} />
        <Route path='/course' component={Course} />
    </div>
  )
}

export default App;

