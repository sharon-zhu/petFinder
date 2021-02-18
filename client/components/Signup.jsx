import React, { Component, useState } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Col} from 'react-bootstrap';


const SignUpForm = () => {
    
          // variable, function to set vai
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [zipCode, setZipCode] = useState('')

    const submitSignupForm = () => {
        event.preventDefault();

        const data = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            psword : password,
            zipcode: zipCode
        }

        fetch('/api/signup',{method : "POST", headers : {'Content-type' : 'application/json'}, body : JSON.stringify(data)})
        //
        .then(data => console.log("posted User into Users table", data))
        .catch(err => console.log("error in fetching", err))

    }

  return (
    <div>
        <h2 className = "signUpHeader">Sign Up Here!</h2>
        <Col></Col>
        <Col className="signUpForm">
        <Form>
            <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name.." onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name.." onChange={(e) => setLastName(e.target.value)}/>
            </Form.Group >

            <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email.." onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password.." onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Zip Code.." onChange={(e) => setZipCode(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="button" onClick={(e) => submitSignupForm(e)}>
            Submit
            </Button>
          </Form>
        </Col>
     <Col></Col>
</div>)
}

export default SignUpForm;