import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMagnifyingGlass, faShoePrints } from '@fortawesome/free-solid-svg-icons'

import "./mainnav.css"

const MainNav = () => {
	return (
		<Navbar className="main-nav">

			<Container className="d-block">
				
					<Navbar.Brand href="#home">
					<FontAwesomeIcon icon={faShoePrints} size="2x" className="logo-icon"/>{" "}
						<span className="logo-text"><b>Buty</b><span>Swiata</span></span>
					</Navbar.Brand>
				
				<Row>
					<Form className="d-flex my-2">
						<Form.Control
							type="search"
							placeholder="Szukaj produktu"
							className="me-2"
							aria-label="Szukaj produktu"
						/>
						<Button variant="outline-secondary" size="lg" className="bar-search-button"><FontAwesomeIcon icon={faMagnifyingGlass} className="bar-search-icon" /></Button>
					</Form>
				</Row>
			</Container>
		</Navbar>
	)
}

export default MainNav
