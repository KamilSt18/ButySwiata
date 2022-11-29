import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import Card from 'react-bootstrap/Card';

import "./details.css"
import Shoe from "../../images/shoe.jpg"

import MainNav from "../../components/MainNav/MainNav"
import Footer from "../../components/Footer/Footer"

const Details = () => {
	return (
		<>
			<MainNav />

			<Container>
				<div className="container-body" style={{ marginTop: 48 }}>
					<Row>
						<Col>
							<h2>Buty NIKE</h2>
							<h5>Air Max Sc CW4555 002 Black/White/Black</h5>


							<Carousel variant="dark" style={{margin: '15px 0'}}>
								<Carousel.Item>
									<img className="d-block w-100" src={Shoe} alt="First slide" />
								</Carousel.Item>
							</Carousel>
<hr />
                            <h4>Szczegóły produktu</h4>
                            <div><strong>Kategoria:</strong> Obuwie sportowe</div>
                            <div><strong>Marka:</strong> Nike</div>
                            <div><strong>Model:</strong> Air Max Sc CW4555 002</div>
                            <div><strong>Kolor:</strong> Czarny</div>
                            <hr />
                            
                            <p style={{marginTop: 10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique, obcaecati et maxime voluptates autem. Dicta, nesciunt optio quasi delectus nobis voluptatem praesentium dolore alias corporis id quibusdam iure sit autem! Praesentium error repellendus quibusdam, sequi dicta sed quas totam quis tempore nisi minima odio. Velit dolorum corporis ipsum ut vitae incidunt dolor cumque dolore sint laudantium repellat fuga sapiente placeat, ipsa numquam, voluptate facere! Ducimus, nobis doloribus? Ab nesciunt magni cumque harum soluta animi recusandae id culpa, non delectus assumenda quam impedit ex quisquam eum? Totam quasi, error cum ducimus deleniti dolore reiciendis, eius fugit sequi odio voluptate doloribus.</p>
						</Col>
						<Col>
                        
                        <Card className="text-center" style={{marginTop: 85}}>
      <Card.Header><strong>Stan magazynowy</strong></Card.Header>
      <Card.Body>
        <Card.Title>Cena: <span style={{color: 'green'}}>249,99 zł</span>/szt</Card.Title>
        <Card.Text>
          Możliwość zamówienia produktu, dostawa kurierem tel. +48 123-456-789
        </Card.Text>
      </Card.Body>
      <Card.Footer>Dostępność w sklepie stacjonarnym: <strong>98 szt</strong></Card.Footer>
    </Card>

                        </Col>
					</Row>
				</div>
			</Container>

			<Footer />
		</>
	)
}

export default Details
