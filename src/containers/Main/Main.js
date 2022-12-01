import React, { useEffect, useRef, useState } from "react"
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
	const [render, setRender] = useState(true);

	const [category, setCategory] = useState(null)
	const defLink = "/shoes/?"
	const [url, setUrl] = useState(defLink)

	const brandRef = useRef()
	const modelRef = useRef()
	const searchRef = useRef()
	const colorRef = useRef()
	const sizeRef = useRef()
	const searchHandler = e => {
		e.preventDefault()
		setUrl(val => val + `&search=${searchRef.current.value}`)
	}

	const applyHandler = () => {
		// Size
		if (sizeRef.current && sizeRef.current !== "Wybierz...") {
			setUrl(val => val + `&size__name=${sizeRef.current}`)
		}

		// Color
		if (colorRef.current && colorRef.current !== "Wybierz...") {
			setUrl(val => val + `&color__name=${colorRef.current}`)
		}

		// Brand
		if (brandRef.current.value && String(brandRef.current.value).length > 0) {
			setUrl(val => val + `&search=${brandRef.current.value}`)
		}

		// Model
		if (modelRef.current.value && String(modelRef.current.value).length > 0) {
			setUrl(val => val + `&search=${modelRef.current.value}`)
		}
		setRender(val => !val)
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
			<MainNav
				searchRef={searchRef}
				searchHandler={searchHandler}
				setCategory={setCategory}
				defLink={defLink}
				setUrl={setUrl}
			/>
			<Categories
				category={category}
				setCategory={setCategory}
				setRender={setRender}
			/>

			<Container>
				<Row>
					<Col lg={3}>
						<SearchForm key={render}
							sizes={sizes}
							colors={colors}
							applyHandler={applyHandler}
							brandRef={brandRef}
							modelRef={modelRef}
							colorRef={colorRef}
							sizeRef={sizeRef}
						/>
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
