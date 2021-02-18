import React, { Component, useState } from 'react';
import {Col, Row, Container} from 'react-bootstrap';

const Homepage = () => {
  return (
    <Container>
      <Row>
        <Col> 
          <Navigation 
            indexPage = {this.state.indexPage}
            handleSearch = {this.handleSearch} />      
        </Col>
      </Row>
    </Container>
  )
} 
      
export default Homepage;