import React from 'react';

import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

import './products.css'
import Shoe from '../../images/shoe.jpg'

const Products = () => {
    return ( 
        <>
        				<span className="container-text">Lista produktów</span>
					<div className="container-body">



						<Row xs={1} md={3} xl={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card onClick={() => {console.log('Klik')}} className="card-style">
            <Card.Img variant="top" src={Shoe} />
            <Card.Body>
              <Card.Text>
			  Tenis feminino nike Revolution
              </Card.Text>
              <Card.Title>R$ 120,90</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>





					</div>
        </>
     );
}
 
export default Products;