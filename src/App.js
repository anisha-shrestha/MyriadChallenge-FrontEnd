import React, { Component } from "react";

import "./App.css";
import PokemonList from "./Components/PokemonList";

class App extends Component {
  constructor(props) {
    super(props);
  }
push(){
     // var a = PokemonList.setState(PokemonList.state.clicks =2)
      document.getElementById(" poke");
      //PokemonList.state.clicks =2;
   // alert(a)



}

  render() {
    return (

      <div className="App" id={"poke"}>
        <h1>Pokédex </h1>


        <PokemonList />
      </div>
    );
  }
}

export default App;
