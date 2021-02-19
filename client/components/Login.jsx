import React, { useState, useContext } from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import { Redirect, Link, useHistory } from 'react-router-dom';


const Login = () =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();
  
  const submitLoginForm = () => {
    const data = {
      email: email, 
      psword: password
    }

    fetch("/api/login", {method : "POST", headers : {'Content-type' : 'application/json'}, body : JSON.stringify(data)})
      .then(data => {
        history.push('/homepage')
        console.log("logged in" , data)})
      .catch(err => console.log("error in fetching", err))
  }

  return (
    <div>
      <h2 className = "signUpHeader">Log in.</h2>
      <Col className="signUpForm">
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="button" onClick={submitLoginForm}>
            Submit
        </Button>
        </Form>
        </Col>
      <Col></Col>
  </div>
  )
}

export default Login;