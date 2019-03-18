import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PokemonList from "./Components/PokemonList";
import PokemonDetail from "./Components/PokemonDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/:PokemonId" component={PokemonDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
