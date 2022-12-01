import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import "./searchform.css"

const SearchForm = ({ sizes, colors, applyHandler, brandRef, modelRef, colorRef, sizeRef}) => {
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
                <div className="my-3">
                    <Form.Label>Rozmiar</Form.Label>
                    <Form.Select aria-label="Wybierz..." onChange={e => {sizeRef.current = e.target.value}}>
                        <option>Wybierz...</option>
                        {sizesOption}
                    </Form.Select>
                </div>
                <div className="my-3">
                    <Form.Label>Kolor</Form.Label>
                    <Form.Select aria-label="Wybierz..." onChange={e => {colorRef.current = e.target.value}}>
                        <option>Wybierz...</option>
                        {colorsOption}
                    </Form.Select>
                </div>
                <div className="my-3">
                    <Form.Label>Marka</Form.Label>
                    <Form.Control type="text" ref={brandRef} />
                </div>
                <div className="my-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" ref={modelRef} />
                </div>
                <div className="d-grid gap-2">
                    <Button
                        variant="secondary"
                        className="search-button"
                        onClick={applyHandler}>
                        Zastosuj
                    </Button>
                </div>
            </form>
		</>
	)
}

export default SearchForm
