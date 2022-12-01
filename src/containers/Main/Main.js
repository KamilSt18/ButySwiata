import React, { useEffect, useState } from "react"
import { Row, Col, Container } from "react-bootstrap"

import MainNav from "../../components/MainNav/MainNav"
import Categories from "../../components/Categories/Categories"
import Footer from "../../components/Footer/Footer"
import Products from "../../components/Products/Products"
import SearchForm from "../../components/SearchForm/SearchForm"

import { getRequest } from "../../api"

const Main = () => {
	const [shoes, setShoes] = useState([])
	const [sizes, setSizes] = useState([])
	const [colors, setColors] = useState([])

	useEffect(() => {
		// Get shoes to arr
		getRequest('/shoes/').then(res => {
			setShoes(res)
		}).catch(err => console.log(err))

		// Get sizes to arr
		getRequest('/size/').then(res => {
			setSizes(res)
		}).catch(err => console.log(err))

		// Get colors to arr
		getRequest('/color/').then(res => {
			setColors(res)
		}).catch(err => console.log(err))
	}, [])

	return (
		<>
			<MainNav />
			<Categories />

			<Container>
				<Row>
					<Col lg={3}>
						<SearchForm sizes={sizes} colors={colors}/>
					</Col>
					<Col>
						<Products shoes={shoes} />
					</Col>
				</Row>
			</Container>

			<Footer />
		</>
	)
}

export default Main
