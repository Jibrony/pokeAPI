import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Components/Encabezado';
import RecipeCard from './Components/RecipeCard';
import PokemonCard from './Components/PokemonCard';
import Buscador from './Components/Buscador';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Encabezado
          logo={logo}
          titulo="Mi proyecto"
        />
        <Buscador />
        <PokemonCard/>
      </header>
    </div>
  );
}

export default App;
