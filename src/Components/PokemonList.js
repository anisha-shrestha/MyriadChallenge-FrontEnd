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
          <button onClick={() => this.decrease()}> Previous</button>
          <button onClick={() => this.increase()}> Next</button>
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
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
