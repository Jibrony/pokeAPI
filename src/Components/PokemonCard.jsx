import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PokeApi from '../PokeApi'; // Asegúrate de tener la ruta correcta al archivo de recetas
import RecipeCardDesign from './css/RecipeCardDesign.css'; // Asegúrate de tener la ruta correcta al archivo de estilos
import { useEffect, useState } from 'react';

function PokemonCard() {

    const [pokemonList, setPokemonList] = useState();

    const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                console.log("Esta es la pokeapi");
                setPokemonList([data.results]);
            });
    }, []);

    return (
        <Container>
            <ul>
            <Row className='fila'>
                {PokeApi.map((pokemon, colIndex) => (
                    <Col key={colIndex} lg={3}>
                        <Card style={{ width: '100%', height: '100%' }} className='Carta-Pokemon'>
                            <div className="card-image-wrapper">
                                {pokemonList.map((pokemon, index) => (
                                    <div key={index}>
                                        <Card.Img variant="top" src={pokemon.sprite[1].front_default} name="pokemon" className="img-product" />
                                    </div>
                                ))}
                            </div>
                            <Card.Body className='poke-card'>
                                <Card.Title style={{ fontSize: "30px" }}>
                                    <strong>
                                        {pokemon.name}
                                    </strong>
                                </Card.Title>
                                {/* <Card.Text className='descripcion'>
                                    {recipe.descripcion}
                                </Card.Text> */}
                                <div className="button-container">
                                    <Button variant="primary">Ver receta</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </ul>
        </Container>
    );
}

export default PokemonCard;