import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap/";
import React, { useEffect, useState } from "react";
import Encabezado from "./Components/Encabezado";
import Buscador from "./Components/Buscador";
import PokemonCard from "./Components/PokemonCard";
import pokemonData from "./pokemonData.js";
import PokemonCardGrid from "./Components/PokemonCard";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const [nombre, setNombre] = useState("Nombre");
  const [name, setName] = useState("Nombre");
  const [pokemon, setPokemon] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {

    
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div className="App">
      <Encabezado
        logo="https://i.ibb.co/z4z4z4z/logo.png"
        titulo="Pokédex"
      />
      <Container>
        <h1>{pokemonData.base_experience}</h1>
        {/* <Encabezado logo={logo} titulo={"Juegos"} /> */}
        <Buscador texto={"Buscar Pokemon"} foundPokemon={setPokemon} />

        <PokemonCardGrid pokemonList={pokemonList} selectedPokemon={selectedPokemon} />


      </Container>
    </div>
  );
}

export default App;
