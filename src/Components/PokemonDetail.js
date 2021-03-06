import React, { Component } from "react";
import axios from "axios";
import "./pokeDetail.css";
export default class PokemonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { bar: 10, title: 2 };
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
    const specialAttack = pokemon.data.data.stats["special-attack"];
    const specialDefense = pokemon.data.data.stats["special-defense"];
    const genus = pokemon.data.data.genus;
    const description = pokemon.data.data.description;
    const eggGroup = pokemon.data.data.egg_groups;
    this.setState({ name });
    this.setState({ image });
    this.setState({ types });
    this.setState({ height });
    this.setState({ weight });
    this.setState({ abilities });
    this.setState({ hp });
    this.setState({ speed });
    this.setState({ genus });
    this.setState({ description });
    this.setState({ eggGroup });
    this.setState({ specialAttack });
    this.setState({ specialDefense });
    this.setState({ attack });
    this.setState({ defense });
  }

  render() {
    return (
      <div>
        {/* Pokemon name header */}
        <h1 className=" position-relative fixed-top text-center display-1 font-weight-bold">
          {this.state.name}
        </h1>
        {/* Card */}
        <div className="topBuffer">
          <div className="card position-relative">
            <div className="card-header text-dark">
              <div className="row">
                <div className=" col-5 ">
                  {/* Pokemon Name */}
                  <h2 className="float-left">{this.state.name}</h2>
                </div>
                {/* Pokemon Type */}
                <div className="col-7">
                  <div className="badge badge-primary mt-2 float-right">
                    {this.state.types}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body text-dark ">
              <div className="col">
                <div className="row ">
                  {/* Image */}
                  <div className=" side float-left ">
                    <img
                      alt={"pokemon"}
                      src={this.state.image}
                      className=" card-img img-fluid "
                    />
                  </div>
                  <div className="row">
                    {/* Progress Bar*/}
                    <div className={`col-9 col-${this.state.bar}`}>
                      <div className="align-items-center">
                        {/* Health */}
                        <div className=" float-right">HP</div>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${this.state.hp}%`
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                            {this.state.hp}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`col-9 col-${this.state.bar}`}>
                      <div className="align-items-center">
                        {/* Attack */}
                        <div className=" float-right">Attack</div>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${this.state.attack}%`
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                            {this.state.attack}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Defense*/}
                    <div className={`col-9 col-${this.state.bar}`}>
                      <div className="align-items-center">
                        <div className=" float-right">Defense</div>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${this.state.defense}%`
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                            {this.state.defense}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Speed*/}
                    <div className={`col-9 col-${this.state.bar}`}>
                      <div className="align-items-center">
                        <div className=" float-right">Speed</div>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${this.state.speed}%`
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                            {this.state.speed}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Special attack*/}
                    <div className={`col-9 col-${this.state.bar}`}>
                      <div className="align-items-center">
                        <div className=" float-right">Sp Atk</div>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${this.state.specialAttack}%`
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                            {this.state.specialAttack}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Special Defense*/}
                    <div className={`col-9 col-${this.state.bar}`}>
                      <div className="align-items-center">
                        <div className=" float-right">Sp Defense</div>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${this.state.specialDefense}%`
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                            {this.state.specialDefense}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Description*/}
                  <h1 className="text-dark">{this.state.genus}</h1>
                  <p> {this.state.description}</p>
                  <h2>Profile</h2>

                  <div className="col side ">
                    <div className="row">
                      <p className="float-left">
                        Height: {this.state.height} m
                      </p>
                      <div className="col-4 float-right">
                        <p className="float-right">
                          Weight: {this.state.weight}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col side">
                    <div className="row">
                      <p className=" float-left">
                        Egg Groups: {this.state.eggGroup}
                      </p>
                      <div className="col-4 float-right">
                        <p className="float-right">
                          Abilities: {this.state.abilities}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
