import React, { useState, useContext } from 'react';
import { useGlobalContext } from './GlobalContext'
import Container from 'react-bootstrap/Container'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Row} from 'react-bootstrap';
import { Redirect, Link, useHistory } from 'react-router-dom';


const Homepage = () => {

  const { handleSearch } = useGlobalContext()
  let history = useHistory();

   return (
    <div>
      <Container>
        <Row className = " justify-content-md-center" > 
          <Form inline className ="search-input" action = "#">
            {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
            <h1 className="mr-sm-2" >Personal Pet Finder</h1>
            <FormControl type="text" placeholder="Enter Zip Code" className="mr-sm-2" onChange={(e)=> handleSearch(e)}/>
            <Form.Control className="mr-sm-2" as="select" onChange={(e)=> handleSearch(e)}>
              <option>Dog</option>
              <option>Cat</option>
            </Form.Control>
            <Button variant="outline-success" type="submit" onClick={(e)=> handleSearch('submit', history)}>Search</Button>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage;
