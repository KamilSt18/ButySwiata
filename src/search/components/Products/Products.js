import React from "react"

import "./products.css"

import CardShoes from "../CardShoes/CardShoes"

import { Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Products = ({ shoes }) => {
	const navigate = useNavigate()
	const shoesCards = shoes
		.map(el => (
			<CardShoes
				key={el.id}
				fun={() => {
					navigate(`/details/${el.id}`)
				}}
				img={el.image}
				name={el.name}
				price={el.price}
				brand={el.brand}
				model={el.model}
			/>
		))
		.reverse()
	return (
		<Row xs={1} md={3} xl={4} className="g-4">
			{shoesCards}
		</Row>
	)
}

export default Products
