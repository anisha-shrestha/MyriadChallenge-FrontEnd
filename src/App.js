import React, { Component } from "react";

import "./App.css";
import PokemonList from "./Components/PokemonList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row ">
          <div className="col">
            <div className="container">
              <PokemonList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
