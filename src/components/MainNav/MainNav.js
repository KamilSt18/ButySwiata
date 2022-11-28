import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap"

import "./mainnav.css"

const MainNav = () => {
	return (
		<Navbar className="main-nav">
			<Container className="d-block">
				<Row>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src="/logo.svg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						React Bootstrap
					</Navbar.Brand>
				</Row>
				<Row>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Row>
			</Container>
		</Navbar>
	)
}

export default MainNav
