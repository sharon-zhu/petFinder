import React from 'react';
import styles from '../styles.css';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import NewNavbar from '../components/NewNavbar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Homepage from '../components/Homepage'
import PetContainer from './PetContainer'
// import Error from './Error';
// import Person from './Person';
// navbar
// import Navbar from './Navbar';
const MainReactRouter = () => {
  return (
    <Router>
      <NewNavbar />

      <Switch>

        <Route exact path='/'>
          <Homepage />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/results'>
          <PetContainer />
        </Route>

        {/* <Route path='/person/:id' children={<Person />}></Route>
        <Route path='*'>
          <Error />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default MainReactRouter;