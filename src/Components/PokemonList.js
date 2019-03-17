import React, { Component } from "react";
import axios from "axios";
import "./materialize.css";
import Filter from "./filter";
import "../App.js";
const url = "https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=";

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      clicks: 2,
      showComponent: false
    };
  }

  decrease = () => {
    console.log("decrease clicked");
    this.setState({ clicks: this.state.clicks - 1 });
    axios
      .get(
        "https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=" +
          this.state.clicks
      )
      .then(res => {
        console.log(res);
        this.setState({ pokemons: res.data.data });
      });
    console.log(this.state.clicks);
  };

  increase = () => {
    console.log("decrease clicked");
    this.setState({ clicks: this.state.clicks + 1 });
    axios
      .get(
        "https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=" +
          this.state.clicks
      )
      .then(res => {
        console.log(res);
        this.setState({ pokemons: res.data.data });
      });
    console.log(this.state.clicks);
  };
  search = event => {
    event.preventDefault();
    this.setState({
      showComponent: true
    });
  };

  componentDidMount() {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?")
      .then(res => {
        console.log(res);
        this.setState({ pokemons: res.data.data });
      });
    console.log(this.state.clicks);
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={() => this.decrease()}> Previous</button>
          <button onClick={() => this.increase()}> Next</button>
          <form onSubmit={this.search}>
            <input type="text" placeholder="Pokedex" />
            <button>Submit</button>
          </form>
          {this.state.showComponent ? <Filter /> : null}
        </p>

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
      </div>
    );
  }
}
