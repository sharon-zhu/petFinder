import React, { useEffect, useState, useContext } from 'react';
import {  Row, Col, Container} from "react-bootstrap";
import FavoritesCard from './FavoritesCard'
import realFakeData from '../FakeModel/realFakeData'

const Favorites = () => {
  const [favs, setFavs] = useState([]);
  let petData;
  console.log(realFakeData.animals)
  // const PetContext = React.createContext();

  useEffect(() => {
    let favsArray = []
    // fetch('/api/favs')
    //   .then((data) => {
        console.log('in useeffect');
        petData = realFakeData.animals.map((obj, i)=>{
          return(<FavoritesCard
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
      setFavs(petData)
      // .catch((err) => console.log('error in fetching favs', err));
  },[]);
  console.log(favs)
  return (
    <Container>
      <Row className="justify-content-md-center">
      <Col></Col>
        <Col>
          <h3>Your Favorite Pets!</h3>
          {favs}
          </Col>
        <Col></Col>
      
      </Row>
    </Container>
  )
};

export default Favorites;
