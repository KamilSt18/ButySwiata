import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const CardShoes = ({fun, img, name, price, brand, model}) => {
    return ( 
        <Col>
          <Card onClick={fun} className="card-style">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Text>
			  <b style={{whiteSpace: 'nowrap'}}>{brand}</b> <br/> <span style={{whiteSpace: 'nowrap'}}>{model}</span> <br/> <i style={{whiteSpace: 'nowrap'}}>{name}</i>
              </Card.Text>
              <Card.Title>{price} PLN/szt.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
     );
}
 
export default CardShoes;