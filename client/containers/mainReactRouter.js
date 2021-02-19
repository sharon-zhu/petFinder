import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import NewNavbar from '../components/NewNavbar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Favorites from '../components/Favorites';
import styles from '../styles.css';
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
          {/* <Home /> */}
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path= '/favs'>
          <Favorites />
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