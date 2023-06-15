"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Introduction = () => {
  const [pokemonImageUrl, setPokemonImageUrl] = useState("");

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
        const pokemonList = response.data.results;
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        const randomPokemon = pokemonList[randomIndex];
        const pokemonDataResponse = await axios.get(randomPokemon.url);
        const pokemonImage = pokemonDataResponse.data.sprites.front_default;
        setPokemonImageUrl(pokemonImage);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomPokemon();
  }, []);

  if (!pokemonImageUrl) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-48 m-auto">
      <div className="bg-white my-4 p-4 rounded-md drop-shadow-lg">
        <div className="w-full">
          <img src={pokemonImageUrl} alt="Random Pokemon" className="w-full" />
        </div>
        <h1>Random Pokemon Image</h1>
      </div>
    </div>
  );
};

export default Introduction;
