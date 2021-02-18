import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Row} from 'react-bootstrap';



class Navigation extends Component {
  render() {
        //configure lottie file
      const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: 'https://assets10.lottiefiles.com/packages/lf20_8nP71q.json',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
  
        //render index page search at initial render of index page
        if (this.props.indexPage){
        return (
          <div>
              <Container>
              <Row className = " justify-content-md-center" > 
                <Form inline className ="search-input" action = "#">
                    {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
                  <h1 className="mr-sm-2" >Personal Pet Finder</h1>
                    <FormControl type="text" placeholder="Enter Zip Code" className="mr-sm-2" onChange={this.props.handleSearch}/>
                <Form.Control className="mr-sm-2" as="select" onChange={this.props.handleSearch}>
                  <option>Dog</option>
                  <option>Cat</option>
                </Form.Control>
                <Button variant="outline-success" type="submit" onClick={()=> this.props.handleSearch('submit')}>Search</Button>
              </Form>
            </Row>
          </Container>
        </div>
      )
    }

    //render navbar at top of screen at all other times
    if (!this.props.indexPage){
      return (
        <div>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Personal Pet Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ="justify-content-center"> 
            <Form inline className = "justify-content-center" >
              <FormControl type="text" placeholder="Enter Zip Code" className="mr-sm-2" onChange={this.props.handleSearch}/>
              <Form.Control className="mr-sm-2" as="select" onChange={this.props.handleSearch}>
                <option>Dog</option>
                <option>Cat</option>
              </Form.Control>
              <Button variant="outline-success" type="submit" onClick={()=> this.props.handleSearch('submit')}>Search</Button>
            </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      )
    }
  }
}

export default Navigation;