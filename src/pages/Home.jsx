import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import People from "../components/People";
import Planets from "../components/Planets";
import Species from "../components/Species";
import Starships from "../components/Starships";

function Home() {
  return (
    <div className="container mt-4">
      <h2>Characters</h2>
      <People />

      <h2 className="mt-5">Planets</h2>
      <Planets />

      <h2 className="mt-5">Species</h2>
      <Species />

      <h2 className="mt-5">Starships</h2>
      <Starships />
    </div>
  );
}

export { Home };