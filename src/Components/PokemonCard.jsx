import React from 'react';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import '../Components/css/pcDesign.css'

function PokemonCard({ name, brief, image }) {
  return (
    <Col md={3} style={{ marginBottom: '20px' }}>
      <Card style={{ width: '100%', height: 'auto'}}>
        <Card.Img variant="top" src={image} className='img-pokemon'/>
        <Card.Body>
          <Card.Title className='title-pokemon'>{name}</Card.Title>
          <Card.Text className='text-pokemon'>{brief}</Card.Text>
          <Button variant="primary" className='btn-pokemon'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function PokemonCardGrid({ pokemonList, selectedPokemon }) {
  const renderPokemonCards = () => {
    if (selectedPokemon) {
      return (
        <PokemonCard
          name={selectedPokemon.name}
          brief="Breve descripción"
          image={selectedPokemon.sprites.front_default}
        />
      );
    } else {
      return pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={index}
          name={pokemon.name}
          brief={pokemon.brief}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`}
        />
      ));
    }
  };

  const rows = [];
  for (let i = 0; i < renderPokemonCards().length; i += 4) {
    rows.push(
      <Row key={i}>
        {renderPokemonCards().slice(i, i + 4)}
      </Row>
    );
  }

  return (
    <Container>
      {rows}
    </Container>
  );
}

export default PokemonCardGrid;
