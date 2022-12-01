import React, { useEffect, useRef, useState } from "react"
import { Row, Col, Container } from "react-bootstrap"

import MainNav from "../../components/MainNav/MainNav"
import Categories from "../../components/Categories/Categories"
import Footer from "../../components/Footer/Footer"
import Products from "../../components/Products/Products"
import SearchForm from "../../components/SearchForm/SearchForm"

import { getRequest } from "../../api"
import { useSessionStorage } from "../../utils/UseSessionStorage"

const Main = () => {
	const [shoes, setShoes] = useState([])
	const [sizes, setSizes] = useState([])
	const [colors, setColors] = useState([])

	const [category, setCategory] = useSessionStorage(null)
	const defLink = "/shoes/?"
	const [url, setUrl] = useSessionStorage(defLink)

	const searchRef = useRef()
	const searchHandler = (e) => {
		e.preventDefault()
		setUrl(val => val + `&search=${searchRef.current.value}`)
	}


	useEffect(() => {
		searchRef.current.value = ""
		if (category) {
			// Get items of category
			setUrl(`/shoes/?category__name=${category}`)
		} else {
			setUrl(defLink)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category])

	useEffect(() => {
		getRequest(url)
		.then(res => {
			setShoes(res)
		})
		.catch(err => console.log(err))
	}, [url])
	

	useEffect(() => {
		// Get sizes to arr
		getRequest("/size/")
			.then(res => {
				setSizes(res)
			})
			.catch(err => console.log(err))

		// Get colors to arr
		getRequest("/color/")
			.then(res => {
				setColors(res)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<MainNav searchRef={searchRef} searchHandler={searchHandler} />
			<Categories
				category={category}
				setCategory={setCategory}
			/>

			<Container>
				<Row>
					<Col lg={3}>
						<SearchForm sizes={sizes} colors={colors} />
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
