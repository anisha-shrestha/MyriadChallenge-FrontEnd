import React from "react";
import axios from "axios";
import "./materialize.css";
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
      <div id="tableview">
        <table width="1024px">
          {this.state.pokemons.map(pokemon => (
            <tr>
              <div className="col s2 m4">
                <div className="card">
                  <span className="card-title">{pokemon.name}</span>
                  <div className="card-image">
                    <img src={pokemon.image} />
                  </div>
                  <a className="btn disabled">{pokemon.types[1]}</a>
                  <a className="btn disabled">{pokemon.types[0]}</a>
                </div>
              </div>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
