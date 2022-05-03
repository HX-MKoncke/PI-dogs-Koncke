import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink, useNavigate, Link } from "react-router-dom";
import { getDetail /*deletePokemon*/ } from "../../redux/actions";
// import PokemonDetailCard from "./pokemonDetailCard/PokemonDetailCard";

export default function Detail(props) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [props.match.params.id, dispatch]);

  return (
    <div>
      <Link to="/home">
        <button>BACK TO HOME</button>
      </Link>

      {detail.length ? (
        <>
          <h1>name: {detail[0].name}</h1>
          <img src={detail[0].image} />
          <h2>weight: {detail[0].weight.metric}</h2>
          <h2>height: {detail[0].height.metric}</h2>
          <h2>life span: {detail[0].life_span}</h2>
          <h3>temperaments: {detail[0].temperament}</h3>
        </>
      ) : (
        <p>JEJE MANDALE</p>
      )}
    </div>
  );
}
