import React, { Component } from "react";

import "./App.css";
import PokemonList from "./Components/PokemonList";
class App extends Component {
constructor(props){
  super(props);
}

  render() {

    return (
      <div className="App">

        <h1>Pokédex </h1>




        <PokemonList/>



</div>
    );
  }
}

export default App;
