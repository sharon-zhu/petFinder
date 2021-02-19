import React, { Component, useState } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const NewNavbar = () => {

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand >petFinder</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="navbutton" to="/"> Home </Link>
          <Link className="navbutton" to="/signup"> Sign Up </Link>
          <Link className="navbutton" to="/login"> Login </Link>
          <Link className="navbutton" to="/favs"> Favorites </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Zipcode" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
} 
      
export default NewNavbar;


/*

    <Container>
      <Row>
        <Col> 
          <Navigation 
            indexPage = {this.state.indexPage}
            handleSearch = {this.handleSearch} />      
        </Col>
      </Row>
    </Container>


*/