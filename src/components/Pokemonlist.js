import React from "react";
import { Link } from "react-router-dom";
function Pokemonlist(props) {
  console.log(props);
  const users = [props.pokemons];
  users.map((user) => {
    <h2>Ahmed</h2>
    // return <p>{user.name}</p>;
  });
  return <ul className="list-group">{users}</ul>;
}

export default Pokemonlist;
