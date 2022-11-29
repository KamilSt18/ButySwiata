import React from 'react'
import Form from 'react-bootstrap/Form';

const SearchForm = () => {
    return ( 
        <>
        					<span className="container-text">Wyszukiwanie</span>
	
	
    <div className="my-3">
        <Form.Label>Rozmiar</Form.Label>
        <Form.Select aria-label="Wybierz...">
              <option>Wybierz...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </Form.Select>
    </div>

<div className="my-3">
    <Form.Label>Kolor</Form.Label>
                        <Form.Select aria-label="Wybierz...">
          <option>Wybierz...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
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