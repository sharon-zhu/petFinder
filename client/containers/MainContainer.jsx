import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';
import PetContainer from './PetContainer';
import Navigation from '../components/Navigation';
import styles from '../styles.css';
import Signup from '../components/Signup'

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.fetchedPetData = [];
    this.state.zipcode = '';
    // what kinda of animal 
    this.state.type = '';
    this.state.favs = [];
    this.state.indexPage = false;
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSave = this.handleSave.bind(this);
    //this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleTypeChange(event) {
    console.log('inside handleTypeChange')
    console.log(event.target.value)
    this.setState({value: event.target.value});
  }

  //handle search requests
  handleSearch(e){
    event.preventDefault();
    console.log(event.target.value)
    console.log('inside handleSearch')
    let zipcode = this.state.zipcode;
    let type = this.state.type;
    if (event.target.value === 'Cat' || event.target.value === 'Dog'){
      console.log('inside if type change', event.target.value)
      this.setState({
        ...this.state, 
        type: event.target.value
      })
    }
    else if(Number(event.target.value)){
      console.log('inside if zipcode change', event.target.value)
      console.log('inside zipcode')
      this.setState({
        ...this.state, 
        zipcode: event.target.value
      })
    }

    else if (e == 'submit'){
      console.log(this.state.type)
      let fetchURL;
      if (this.state.type === ''){
        fetchURL = 'petfinder/dog'  + '/' + this.state.zipcode;
      }
      else {
        fetchURL = 'petfinder/' + this.state.type + '/' + this.state.zipcode;
      }
      console.log(fetchURL)
      fetch(fetchURL)
        .then(data => data.json())
        .then(data => {
        console.log(data)
        this.setState({
          ...this.state,
          fetchedPetData: data,
          indexPage: false,
        })
    })
    }
    //send fetch request 
    
    //parse through retrieved data
    //update state to render 
  }

  //handle pet saving events
  handleSave(saveId){
    event.preventDefault();
    console.log(event.target)
    //send fetch (Post) request here
    const data = {
      id: saveId,  
    }
    fetch('/db', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(data)
    })
    // .then(fetch('/getmessages/')
    .then(data => data.json())
    .then(data => {
    //parse through retrieved data
    //update state to render 
    this.setState({
      ...this.state,
    })
  })
  }

  render() {
    console.log(this.state)
    //render index page version of MainContainer at initial render
    if (this.state.indexPage){
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

    //render MainContainer with Navigation at all other times
    if (!this.state.indexPage){
      return (
        <div>
          <Navigation 
          handleSearch = {this.handleSearch}
          handleTypeChange = {this.handleTypeChange}
          />
          <PetContainer
          handleSave = {this.handleSave} fetchedPetData = {this.state.fetchedPetData}/>
          {/* <Signup />  */}
        </div>
      )
    }
  }   
}

export default MainContainer;