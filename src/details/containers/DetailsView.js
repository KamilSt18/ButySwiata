import React from "react"

import "./detailsview.css"

import MainNav from "../../core/shared/MainNav/MainNav"
import Footer from "../../core/shared/Footer/Footer"
import { fetchShoesById } from "../../core/services/ShoesAPI"
import { Loading } from "../../core/shared/Loading"

import { useParams } from "react-router-dom"

import { Row, Col, Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"

import { useQuery } from "react-query"
import { ErrorMessage } from "../../core/shared/ErrorMessage"

const Details = () => {
	let { id } = useParams()

	const { data, error, isLoading } = useQuery("details:" + id, () =>
		fetchShoesById(id)
	)

	return (
		<>
			<MainNav searchInput={false} />

			<Container>
				<div className="container-body container-details-body">
				{error && <ErrorMessage>{error.message}</ErrorMessage>}
					{isLoading && <Loading />}
					{data && (
						<Row>
							<Col sm="12" lg="6">
								<h2>
									{data.brand} {data.model}
								</h2>
								<h5>{data.name}</h5>
								<Carousel variant="dark" className="carousel">
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
									<strong>Model:</strong> {data.model}
								</div>
								<div>
									<strong>Rozmiar:</strong>{" "}
									{data.size
										.map(val => val.name)
										.sort()
										.join("/")}
								</div>
								<div>
									<strong>Kolor:</strong> {data.color}
								</div>
								<hr />
								<p style={{ marginTop: 10 }}>{data.description}</p>
							</Col>
							<Col sm="12" lg="6">
								<Card className="card-details text-center">
									<Card.Header>
										<strong>Stan magazynowy</strong>
									</Card.Header>
									<Card.Body>
										<Card.Title>
											Cena:{" "}
											<span style={{ color: "green" }}>{data.price} zł</span>
											/szt
										</Card.Title>
										<Card.Text>
											Możliwość zamówienia produktu, dostawa kurierem tel. +48
											123 456 789
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										Dostępność w sklepie stacjonarnym:{" "}
										<strong>{data.pieces} szt.</strong>
									</Card.Footer>
								</Card>
							</Col>
						</Row>
					)}
				</div>
			</Container>

			<Footer />
		</>
	)
}

export default Details
