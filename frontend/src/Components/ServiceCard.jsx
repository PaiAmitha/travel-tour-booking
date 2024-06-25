import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css';

export default function ServiceCard({ image, title, description, horizontal }) {
  return (
    <div className={`service-card ${horizontal ? 'horizontal' : 'vertical'}`}>
      <Card>
        <div className={`card-img-container ${horizontal ? 'horizontal' : 'vertical'}`}>
          <Card.Img variant="top" src={image} className={horizontal ? 'card-img-horizontal' : 'card-img-vertical'} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
