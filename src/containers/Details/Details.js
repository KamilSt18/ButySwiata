import React, { useEffect, useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import { useParams } from "react-router-dom"

import MainNav from "../../components/MainNav/MainNav"
import Footer from "../../components/Footer/Footer"
import { getRequest } from "../../api"

const Details = () => {
	let { id } = useParams()
	const [data, setData] = useState()
	useEffect(() => {
		// Get details item
		getRequest(`/shoes/${id}/`)
			.then(res => {
				res.size = res.size.map(val => val.name).sort().join("/")
				setData(res)
			})
			.catch(err => console.log(err))
	}, [id])

	return (
		data && (
			<>
				<MainNav />

				<Container>
					<div className="container-body" style={{ marginTop: 48 }}>
						<Row>
							<Col>
								<h2>
									{data.brand} {data.model}
								</h2>
								<h5>{data.name}</h5>

								<Carousel variant="dark" style={{ margin: "15px 0" }}>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src={data.image}
											alt={data.name}
										/>
									</Carousel.Item>
								</Carousel>
								<hr />
								<h4>Szczegóły produktu</h4>
								<div>
									<strong>Kategoria:</strong> {data.category}
								</div>
								<div>
									<strong>Marka:</strong> {data.brand}
								</div>
								<div>
									{/* <strong>Model:</strong> {JSON.stringify(data.model)} */}
								</div>
								<div>
									<strong>Rozmiar:</strong> {data.size}
								</div>
								<div>
									<strong>Kolor:</strong> {data.color}
								</div>
								<hr />

								<p style={{ marginTop: 10 }}>
									{data.description}
								</p>
							</Col>
							<Col>
								<Card className="text-center" style={{ marginTop: 85 }}>
									<Card.Header>
										<strong>Stan magazynowy</strong>
									</Card.Header>
									<Card.Body>
										<Card.Title>
											Cena: <span style={{ color: "green" }}>{data.price} zł</span>
											/szt
										</Card.Title>
										<Card.Text>
											Możliwość zamówienia produktu, dostawa kurierem tel. +48 123 456 789
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										Dostępność w sklepie stacjonarnym: <strong>{data.pieces} szt.</strong>
									</Card.Footer>
								</Card>
							</Col>
						</Row>
					</div>
				</Container>

				<Footer />
			</>
		)
	)
}

export default Details
