import React from "react"
import "./categories.css"
import { Container, Row, Col } from "react-bootstrap"

import SportShoes from "../../images/sport_shoes.svg"
import HighHeels from "../../images/high_heels.svg"
import FlipFlops from "../../images/flip_flops.png"
import Boots from "../../images/boots.png"
import Sandals from "../../images/sandals.svg"
import Pumps from "../../images/pumps.svg"

const Categories = ({ category, setCategory, setRender}) => {
	const names = [
		["Obuwie sportowe", SportShoes],
		["Buty na obcasie", HighHeels],
		["Japonki", FlipFlops],
		["Botki", Boots],
		["Sandały", Sandals],
		["Czółenka", Pumps],
	]
	const namesRow = names.map((val, index) => {
		const [name, img] = val
		return (
			<Col key={index}>
				<Row>
					<div
						className="shoes-bg-circle"
						style={{ backgroundColor: category === name ? "#ffef95" : null }}
						onClick={() => {
							if (category === name) {
								setCategory(null)
							} else {
								setCategory(name)
							}
							setRender(val => !val)
						}}>
						<img src={img} alt={name} className="shoes-img-circle" />
					</div>
				</Row>
				<Row
					className="shoes-text-circle"
					style={{ fontWeight: category === name ? "bold" : null }}>
					{name}
				</Row>
			</Col>
		)
	})
	return (
		<Container>
			<Row className="my-5">{namesRow}</Row>
		</Container>
	)
}

export default Categories
