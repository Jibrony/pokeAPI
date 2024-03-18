import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Buscador({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      key="1"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <Button type="submit" style={{height: '45px', width: '100px', fontSize: '20px', marginTop: '-9px', borderRadius: '0px'}}>Buscar</Button>
    </form>
  );
}

export default Buscador;
