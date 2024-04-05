import "./App.css";
import {
  Row,
} from "react-bootstrap/";
import React, { useEffect, useState } from "react";
import Encabezado from "./Components/Encabezado";
import Buscador from "./Components/Buscador";
import PokemonCard from "./Components/PokemonCard";
import pokemonData from "./pokemonData.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

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
      <div className="contenedor-maestro">

        <div className="contenedor-encabezado">
          <Encabezado
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
            titulo="ANDREY JULIAN GUTIERREZ ARCE"
          />
        </div>

        <div className="contenedor-buscador">
          <Buscador texto={"Buscar Pokemon"} foundPokemon={setPokemon} />
        </div>
        {/*{pokemon ? (
            <PokemonCard
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            />
            ) : (
              <h1>No se a encontrado pokemon</h1>
            )}*/}
        <div className="contenedor-pokemon">
          <Row className="row">
            {pokemonList.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`}
              />
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
