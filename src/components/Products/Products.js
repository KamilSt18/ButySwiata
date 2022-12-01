import React from "react"

import { Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import "./products.css"
import CardShoes from "../CardShoes"

const Products = ({ shoes }) => {
	const navigate = useNavigate()
	const shoesCards = shoes.map(el => (
		<CardShoes
			key={el.id}
			fun={() => {
				console.log("Klik w " + el.id)
				navigate(`/details/${el.id}`)
			}}
			img={el.image}
			name={el.name}
			price={el.price}
			brand={el.brand}
			model={el.model}
		/>
	)).reverse()
	return (
		<>
			<span className="container-text">Lista produktów</span>
			<div className="container-body">
				<Row xs={1} md={3} xl={4} className="g-4">
					{shoesCards.length > 0 ? shoesCards : <span style={{padding: 10}}>Brak produktów...</span>}
				</Row>
			</div>
		</>
	)
}

export default Products
