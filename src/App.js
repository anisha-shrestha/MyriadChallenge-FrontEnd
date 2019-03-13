import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import PokemonList from "./Components/PokemonList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokédex </h1>
        <PokemonList />
      </div>
    );
  }
}

export default App;
