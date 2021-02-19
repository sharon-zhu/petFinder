import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Row } from "react-bootstrap";
import { render } from 'react-dom';

const FavoritesCard = (props) => {
  console.log('inside FavoritesCard')
  const missing = "./assets/images/dog-cat-icon.png";
  const photoObjects = props.photos.map(x=>x.small?x.small: missing);
  return(
    <div>
      <Card style={{width:'25rem'}} className="mb-2">    
      <Card.Img variant="top" src={props.primaryPhoto?props.primaryPhoto.medium: missing} />
      <Row className="justify-content-md-center">{""}</Row>
      <Card.Body>
        <Card.Title as="h3" className="mb-1">{props.name}</Card.Title>
        <Card.Text><strong>Age: </strong> {props.age} </Card.Text>
        <Card.Text><strong>Gender: </strong>{props.gender} </Card.Text>
        <Card.Text><strong>About: </strong> {props.description} </Card.Text>       
      </Card.Body>
    </Card>
    </div>
  )
}

export default FavoritesCard;