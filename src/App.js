import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import MainNav from "./components/MainNav/MainNav"
import Categories from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"
import Products from "./components/Products/Products"
import SearchForm from "./components/SearchForm/SearchForm"

import "./app.css"

const App = () => {
	return (
		<>
			<MainNav />
			<Categories />

			<Container>
				<Row>
					<Col lg={3}>
						<SearchForm />
					</Col>
					<Col>
						<Products />
					</Col>
				</Row>
			</Container>
			
			<Footer />
		</>
	)
}

export default App
