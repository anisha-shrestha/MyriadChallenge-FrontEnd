import React, { Component } from "react";
import axios from "axios";
import "./materialize.css";
import { withAlert } from "react-alert";
import "../App.js";
const url="https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=";
//let  clicks =17;

//fdsf
export default class PokemonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            clicks: 1
        };
        this.decrease = this.decrease.bind(this);
        this.setState({clicks: this.state.clicks - 1});
    }

    //static


    decrease = () => {
        console.log("decrease clicked")
        this.setState({clicks: this.state.clicks - 1});
        //this.setState(prevState =>{
        //    return{clicks: prevState.clicks-1}
        //});
        axios
            .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=" + this.state.clicks)
            .then(res => {
                console.log(res);
                this.setState({pokemons: res.data.data});
            });
        console.log(this.state.clicks)
        //alert(this.state.clicks)
        // alert(this.clicks)
    }

    componentDidMount() {
        axios
            .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=" + this.state.clicks)
            .then(res => {
                console.log(res);
                this.setState({pokemons: res.data.data});
            });
        console.log(this.state.clicks)
    }

    render() {
        return (
            <div>
                {this.state.pokemons.map(pokemon => (
                    <div key={pokemon.id} className="cards">
                        <div className="title">{pokemon.name}
                        </div>
                        <div className="image">
                            <img src={pokemon.image}/></div>
                        <button className="btn1">{pokemon.types[1]}</button>
                        <button className="btn2">{pokemon.types[0]}</button>
                    </div>
                ))}
                <h1>
                    <button onClick={() => this.decrease()}> Previous</button>
                    // < button onClick={this.addition} className="next">Next &raquo;</button>
                </h1>
            </div>
        );
    }
}