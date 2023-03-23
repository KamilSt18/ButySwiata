import React from "react"

import "./mainnav.css"

import Logo from "../../../images/logo.png"

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link } from "react-router-dom"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const MainNav = ({
	searchRef,
	onSearchHandler,
	onResetPage,
	searchInput = true,
}) => {
	return (
		<Navbar className="main-nav">
			<Container className="d-block">
				<Link to={"/"} className="remove-link-styles">
					<Navbar.Brand onClick={onResetPage}>
						<img src={Logo} alt="Logo" className="logo-icon" />
						<span className="logo-text">
							<b>Buty</b>
							<span>Swiata</span>
						</span>
					</Navbar.Brand>
				</Link>

				{searchInput && (
					<Row>
						<Form className="d-flex my-2" onSubmit={onSearchHandler}>
							<Form.Control
								ref={searchRef}
								type="search"
								placeholder="Szukaj produktu"
								className="me-2"
								aria-label="Szukaj produktu"
							/>
							<Button
								type="submit"
								variant="outline-secondary"
								size="lg"
								className="bar-search-button">
								<FontAwesomeIcon
									icon={faMagnifyingGlass}
									className="bar-search-icon"
								/>
							</Button>
						</Form>
					</Row>
				)}
			</Container>
		</Navbar>
	)
}

export default MainNav
