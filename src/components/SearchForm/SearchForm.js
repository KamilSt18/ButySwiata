import React from 'react'
import Form from 'react-bootstrap/Form';

const SearchForm = ({sizes, colors}) => {
    const sizesOption = sizes.map((size) => <option key={size.id} value={size.id}>{size.name}</option>)
    const colorsOption = colors.map((color) => <option key={color.id} value={color.id}>{color.name}</option>)
    return ( 
        <>
        					<span className="container-text">Wyszukiwanie</span>
	
	
    <div className="my-3">
        <Form.Label>Rozmiar</Form.Label>
        <Form.Select aria-label="Wybierz...">
              <option>Wybierz...</option>
              {sizesOption}
            </Form.Select>
    </div>

<div className="my-3">
    <Form.Label>Kolor</Form.Label>
                        <Form.Select aria-label="Wybierz...">
          <option>Wybierz...</option>
          {colorsOption}
        </Form.Select>
</div>


<div className="my-3">
    <Form.Label>Marka</Form.Label>
    <Form.Control type="text" />
</div>



<div className="my-3">
    <Form.Label>Model</Form.Label>
    <Form.Control type="text" />
</div>
        </>
     );
}
 
export default SearchForm;