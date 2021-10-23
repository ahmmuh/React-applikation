import React, { useState, useEffect } from "react";
import PokemonDetail from "./PokemonDetail";
import PokemonList from "./Pokemonlist";
function Dashboard() {
  const [pokemons, setPokemon] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-lg-4">
          {pokemons.map((user) => {
            return <PokemonList user={user} />;
          })}
        </div>
        <div className="col-lg-8"></div>
      </div>
    </div>
  );
}

export default Dashboard;
