import React from "react";
import axios from "axios";
import "./materialize.css";
import { Container, Row, Col } from "reactstrap";
//fdsf
export default class PokemonList extends React.Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1")
      .then(res => {
        console.log(res);
        this.setState({ pokemons: res.data.data });
      });
  }

  render() {
    return (
      <div   >

          {this.state.pokemons.map(pokemon => (
              <div  className="cards" >

                  <div className= "title">{pokemon.name}
                  </div>
                  <div className= "image">
                      <img src={pokemon.image}  /></div>

                      <button className="btn1">{pokemon.types[1]}</button>
                      <button className="btn2" >{pokemon.types[0]}</button>


              </div>




          ))}

      </div>
    );
  }
}
