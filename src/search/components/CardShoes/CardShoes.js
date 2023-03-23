import React from 'react';

import './cardshoes.css'

import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const CardShoes = ({fun, img, name, price, brand, model}) => {
    return ( 
        <Col>
          <Card onClick={fun} className="card-style">
            <Card.Img variant="top" src={img} className='card-fit' />
            <Card.Body>
              <Card.Text className='card-text-break'>
			  <b>{brand}</b> <br/>
        <span>{model}</span> <br/>
        <i>{name}</i>
              </Card.Text>
              <Card.Title>{price} PLN/szt.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
     );
}
 
export default CardShoes;