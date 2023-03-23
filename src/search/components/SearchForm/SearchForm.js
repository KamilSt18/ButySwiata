import React from "react"

import "./searchform.css"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const SearchForm = ({
	sizes,
	colors,
	colorRef,
	sizeRef,
	onSearchFormHandler,
}) => {
	const sizesOption = sizes.map(size => (
		<option key={size.id} value={size.name}>
			{size.name}
		</option>
	))
	const colorsOption = colors.map(color => (
		<option key={color.id} value={color.name}>
			{color.name}
		</option>
	))
	return (
		<>
			<span className="container-text">Wyszukiwanie</span>

			<form>
				<div className="d-grid gap-4">
					<div className="gap-0">
						<Form.Label>Rozmiar</Form.Label>
						<Form.Select
							aria-label="Wybierz..."
							ref={sizeRef}>
							<option value=''>Wybierz...</option>
							{sizesOption}
						</Form.Select>
					</div>
					<div className="gap-0">
						<Form.Label>Kolor</Form.Label>
						<Form.Select
							aria-label="Wybierz..."
							ref={colorRef}>
							<option value=''>Wybierz...</option>
							{colorsOption}
						</Form.Select>
					</div>
					<div className="d-grid">
						<Button
							variant="secondary"
							className="search-button"
							onClick={onSearchFormHandler}>
							Zastosuj
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}

export default SearchForm
