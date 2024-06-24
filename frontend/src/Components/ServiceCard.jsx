import React from 'react'
import { Card } from 'react-bootstrap'
import './ServiceCard.css'

export default function ServiceCard({image, title, description}) {
  return (
    <div>
      <Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
