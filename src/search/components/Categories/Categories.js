import React from "react"

import "./categories.css"

import SportShoes from "../../../images/search/sport_shoes.svg"
import HighHeels from "../../../images/search/high_heels.svg"
import FlipFlops from "../../../images/search/flip_flops.png"
import Boots from "../../../images/search/boots.png"
import Sandals from "../../../images/search/sandals.svg"
import Pumps from "../../../images/search/pumps.svg"

import { Container, Row, Col } from "react-bootstrap"
import clsx from "clsx"

const Categories = ({ category, setCategory }) => {
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

		const selectCategory = () => {
			if (category !== name) {
				setCategory(name)
			} else {
				setCategory(null)
			}
		}
		return (
			<Col key={index}>
				<Row>
					<div
						className={clsx(
							"shoes-bg-circle",
							category === name && "shoes-bg-circle-active"
						)}
						onClick={selectCategory}>
						<img src={img} alt={name} className="shoes-img-circle" />
					</div>
				</Row>
				<Row
					className={clsx("shoes-text-circle", category === name && "fw-bold")}>
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
