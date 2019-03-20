import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.js";

const url = "https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=";
const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      clicks: 2,
      value: "",
      PokemonId: "",
      url: " https://intern-pokedex.myriadapps.com/api/v1/pokemon/",
      types: []
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
  }

  render() {
    return (
      <div>
        <div className="row ">
          <div className="col-sm-3  text-left">
            <button
              className="side btn-success"
              onClick={() => this.decrease()}
            >
              Previous
              <i className="glyphicon glyphicon-arrow-left" />
            </button>
          </div>
          <div className=" side text-center">
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-control-lg color page-header text-center font-weight-bold text-white"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Pokédex"
                style={{ width: "500px" }}
              />
            </form>
          </div>
          <div className=" side text-right">
            <button
              className=" btn-circle btn-warning btn-lg"
              onClick={() => this.increase()}
            >
              Next
              <i className="glyphicon glyphicon-arrow-right" />
            </button>
          </div>
        </div>
        <div className="topBuffer ">
          <div className="card-deck">
            {this.state.pokemons.map(pokemon => (
              <div key={pokemon.id} className="col-md-3 col-sm-6 mb-5">
                <StyleLink
                  to={{
                    pathname: "/detail",
                    state: {
                      url:
                        "https://intern-pokedex.myriadapps.com/api/v1/pokemon/" +
                        pokemon.id
                    }
                  }}
                >
                  <div>
                    <div className="card " style={{ maxWidth: "1024px" }}>
                      <div className="card-header text-dark">
                        {pokemon.name}
                      </div>
                      <div className="card-img-top text-center ">
                        <img src={pokemon.image} />
                      </div>
                      <footer className="card-text text-dark text-right">
                        <span className="badge badge-primary mt-2">
                          {pokemon.types[1]} {pokemon.types[0]}
                        </span>
                      </footer>
                    </div>
                  </div>
                </StyleLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
