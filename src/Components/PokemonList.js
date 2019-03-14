import React, { Component } from "react";
import axios from "axios";
import "./materialize.css";
import { withAlert } from 'react-alert';
import "../App.js"


//fdsf
export default  class PokemonList extends React.Component {
    state = {
            pokemons: [],
        clicks: 13

        };
    //static


     decrease = ()=> {

         this.setState({clicks:this.state.clicks-1});
         //this.setState(prevState =>{
         //    return{clicks: prevState.clicks-1}
         //});

        window.location.reload(true)

        alert(this.state.clicks)
       // alert(this.clicks)

    }


    componentDidMount() {
        this.setState({clicks:this.state.clicks-1});
             axios
                 .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=" + this.state.clicks)
                 .then(res => {
                     console.log(res);
                     this.setState({pokemons: res.data.data});
                 });

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
                    <button onClick={this.decrease}>{this.state.clicks} className="previous"> &laquo; Previous</button>
                    < button onClick={this.addition} className="next">Next &raquo;</button>
                </h1>
            </div>
        );
    }

}
