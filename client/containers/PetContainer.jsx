import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import PetDetails from '../components/PetDetails'
// import PetImages from '..components/PetImages';
// import SavePet from '..components/SavePet';
// import data from '../FakeModel/fakeData';


function PetContainer(props){  
  console.log('pet container props: ', props)

  const dataObjects = props.fetchedPetData.animals.map((obj, i)=>{
    return(<PetDetails
      key = {i}
      id = {obj.id}
      name = {obj.name}
      age = {obj.age}
      gender = {obj.gender}
      description = {obj.description}
      primaryPhoto = {obj.primary_photo_cropped}
      photos = {obj.photos}
    />)
  })

  
  return(
    <Container>
      <Row className="justify-content-md-center">
      <Col></Col>
        <Col>
          <h3>Pets Near You</h3>
          {dataObjects}
          </Col>
        <Col></Col>
      
      </Row>
    </Container>
  );
}
  


// Render an <App> component to the #app div in the body
export default PetContainer;