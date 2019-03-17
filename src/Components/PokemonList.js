import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "../App.js";

const url = "https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=";

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      clicks: 2,
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //alert("hi");
    //this.setState({ value: this.state.value });
    axios
      .get(
        " https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=" +
          this.state.value
        //this.state.value
      )
      .then(res => {
        console.log(res);
        this.setState({ pokemons: res.data.data });
      });
  }

  componentDidMount() {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?")
      .then(res => {
        console.log(res);
        this.setState({ pokemons: res.data.data });
      });
    console.log(this.state.clicks);
  }
  /*<form>
            <input type="text" placeholder="Pokedex" value={this.state.value} />
            <button onClick={this.onSubmit}>Submit</button>
          </form> */

  render() {
    return (
      <div>
        <p>
          <button
            class=" btn-circle btn-warning btn-lg"
            onClick={() => this.decrease()}
          >
            <i className="glyphicon glyphicon-arrow-left" />
          </button>
          <button
            class=" btn-circle btn-warning btn-lg"
            onClick={() => this.increase()}
          >
            <i className="glyphicon glyphicon-arrow-right" />
          </button>
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Pokédex"
            />
          </form>
        </p>
        <div className="card-group">
          {this.state.pokemons.map(pokemon => (
            <div key={pokemon.id} className="col-md-3 col-sm-6 mb-5">
              <div className="card">
                <div className="card-header text-dark">{pokemon.name}</div>
                <div className="card-img-top text-center ">
                  <img src={pokemon.image} />
                </div>
                <footer className="card-text text-dark text-right">
                  {pokemon.types[1]}

                  {pokemon.types[0]}
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
