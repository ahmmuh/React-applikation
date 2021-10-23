import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function PokemonDetail(props) {
  const [state, setstate] = useState([]);
  // let { id, name } = useParams();
  // console.log(name)
  // const url = "https://pokeapi.co/api/v2/pokemon?" + id;
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setstate(data.results));
  //   console.log(state);
  // }, []);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">ID: </h5>

        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-danger">Ta bort den</button>
      </div>
    </div>
  );
}

export default PokemonDetail;
