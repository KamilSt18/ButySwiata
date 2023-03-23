import React, { useEffect, useRef, useState } from "react"

import MainNav from "../../core/shared/MainNav/MainNav"
import Categories from "../../search/components/Categories/Categories"
import Footer from "../../core/shared/Footer/Footer"
import Products from "../components/Products/Products"
import SearchForm from "../components/SearchForm/SearchForm"
import { Loading } from "../../core/shared/Loading"
import { ErrorMessage } from "../../core/shared/ErrorMessage"

import {
	fetchShoes,
	fetchSizes,
	fetchColors,
} from "../../core/services/ShoesAPI"

import { Row, Col, Container, Alert } from "react-bootstrap"

import { useQuery } from "react-query"
import { useSearchParams } from "react-router-dom"

const SearchView = () => {
	const [params, setParams] = useSearchParams()
	const queryParam = params.get("q")
	const categoryParam = params.get("cat")
	const sizeParam = params.get("s")
	const colorParam = params.get("c")

	const [query, setQuery] = useState(queryParam)
	const [category, setCategory] = useState(categoryParam)
	const [size, setSize] = useState(sizeParam)
	const [color, setColor] = useState(colorParam)
	
	const [shoes, setShoes] = useState([])
	const [sizes, setSizes] = useState([])
	const [colors, setColors] = useState([])

	const searchRef = useRef()
	const colorRef = useRef()
	const sizeRef = useRef()

	useEffect(() => {
		fetchSizes()
			.then(res => setSizes(res))
			.catch(err => console.log(err))
		fetchColors()
			.then(res => setColors(res))
			.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		searchRef.current.value = queryParam
		setQuery(queryParam || "")
	}, [queryParam])

	const { data, error, isLoading } = useQuery(
		`fetchShoes:${query} ${category} ${size} ${color}`,
		() => fetchShoes(query, category, size, color)
	)
	useEffect(() => setShoes(data), [data])


	const resetPage = () => {
		searchRef.current.value = ""
		setQuery("")
		setCategory(null)
		setSize(undefined)
		setColor(undefined)
		sizeRef.current.value = ""
		colorRef.current.value = ""
	}


	const searchHandler = e => {
		e.preventDefault()
		const localQuery = searchRef.current.value
		setQuery(localQuery)

		localQuery ? params.set("q", localQuery) : params.delete("q")
		setParams(params)
	}


	const searchFormHandler = () => {
		const sizeValueLocal = sizeRef.current.value
		const colorValueLocal = colorRef.current.value

		setSize(sizeValueLocal)
		setColor(colorValueLocal)
	}

	return (
		<>
			<MainNav
				searchRef={searchRef}
				onSearchHandler={searchHandler}
				onResetPage={resetPage}
			/>
			<Categories
				category={category}
				setCategory={setCategory}
			/>

			<Container>
				<Row>
					<Col lg={3}>
						<SearchForm
							sizes={sizes}
							colors={colors}
							colorRef={colorRef}
							sizeRef={sizeRef}
							onSearchFormHandler={searchFormHandler}
						/>
					</Col>
					<Col>
						<span className="container-text">Lista produktów</span>
						<div className="container-body">
							{error && <ErrorMessage>{error.message}</ErrorMessage>}
							{isLoading && <Loading />}
							{shoes && <Products shoes={shoes} />}
							{!isLoading && data.length <= 0 && (
								<Alert variant="warning" className="my-4">
									Brak produktów.
								</Alert>
							)}
						</div>
					</Col>
				</Row>
			</Container>

			<Footer />
		</>
	)
}

export default SearchView
