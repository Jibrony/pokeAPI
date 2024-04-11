import { useEffect, useState } from "react";
import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import BuscadorDesign from "./css/BuscadorDesign.css"

function Finder({ texto, foundPokemon }) {

  const [name, setName] = useState("");


  useEffect(() => {

  }, []);

  function getPokemonData() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        foundPokemon(data);
      });

  }


  return (
    <Row>
      <Col sm={12}>
        <h1>{name}</h1>
        <InputGroup className="mb-3">
          <Form.Control className="form-control"
            placeholder="Nombre del Pokemon"
            aria-label=""
            aria-describedby="basic-addon2"
            onChange={(e) => setName(e.target.value)}
          />

          <Button variant="outline-secondary" id="button-addon2" onClick={getPokemonData} className="btn-buscador">
            {texto}
          </Button>
        </InputGroup>

      </Col>
    </Row>
  );
}

export default Finder;
