import React, { Component } from "react";
import axios from "axios";

export default class PokemonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    //debugger;
    let url = this.props.location.state.url;

    const pokemon = await axios.get(url);
    const name = pokemon.data.data.name;
    const image = pokemon.data.data.image;
    const types = pokemon.data.data.types;
    const height = pokemon.data.data.height;
    const weight = pokemon.data.data.weight;
    const abilities = pokemon.data.data.abilities;
    const hp = pokemon.data.data.stats.hp;
    const speed = pokemon.data.data.stats.speed;
    const attack = pokemon.data.data.stats.attack;
    const defense = pokemon.data.data.stats.defense;
    const specialAttack = pokemon.data.data.stats.special - attack;
    const specialDefense = pokemon.data.data.stats.special - defense;
    const genus = pokemon.data.data.genus;
    const description = pokemon.data.data.description;
    this.setState({ name });
    this.setState({ image });
    this.setState({ types });
    this.setState({ height });
    this.setState({ weight });
    this.setState({ abilities });
    this.setState({ hp });
    this.setState({ speed });
    this.setState({ attack });
    this.setState({ defense });
  }

  render() {
    return (
      <div className="text-center h1">
        <div className="fixed-top">{this.state.name}</div>
        <div className="col">
          <div className="card text-dark">
            <div className="card-header">
              <h5 className="float-left">{this.state.name}</h5>
              <div className="float-right badge badge-primary badge-pill">
                {this.state.types}
              </div>
            </div>
            <div className="card-body">
              <div className="alight-items-center">
                <img className="card-img-top mx-auto" src={this.state.image} />
              </div>
              <div className="align-items-right">
                <div className=" ">HP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
