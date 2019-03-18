import React, { Component } from "react";
import axios from "axios";

export default class PokemonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      PokemonId: ""
    };
  }

  componentDidMount() {
    const url =
      " https://intern-pokedex.myriadapps.com/api/v1/pokemon/${PokemonId}";
    axios.get(url).then(res => {
      console.log(res);
      this.setState({ pokemon: res });
    });
  }

  render() {
    return <div>Hi</div>;
  }
}
