import React, { Component } from "react";
import axios from "axios";
import "./materialize.css";
import { withAlert } from "react-alert";
import "../App.js";
const url="https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=";
//let  clicks =17;
var clicks;

function handleClick (){
    clicks = clicks+1;
    //window.location.reload(true);
};
//fdsf
export default class PokemonList extends React.Component {
  state = {
    pokemons: [],

  };
  //static



  componentDidMount() {
      clicks =1;

    axios
      .get(
          url+clicks
      )
      .then(res => {
        console.log(res);
        this.setState({ pokemons: res.data.data });
      });
  }


  render() {
    return(
//
      <section>
          <div>
              <button onClick={handleClick()}> {clicks}&laquo; Previous</button>
          </div>
        {this.state.pokemons.map(pokemon => (
          <div key={pokemon.id} className="cards">
            <div className="title">{pokemon.name}</div>
            <div className="image">
              <img src={pokemon.image} />
            </div>

              <button className="btn1">{pokemon.types[1]}</button>
              <button className="btn2">{pokemon.types[0]}</button>

          </div>
        ))}

      </section>


    );
  }
}
