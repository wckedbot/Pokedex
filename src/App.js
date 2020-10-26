import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx'

class App extends Component {

  constructor() {
    super();

    this.state = {
      pokemons: [
      ],
      pokemonDetails: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => 
    response.json())
    .then(data => {
      this.setState({pokemons: data.results}, () => {
        this.state.pokemons.map(pokemon => {
          fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            var temp = this.state.pokemonDetails
            temp.push(data)
            this.setState({pokemonDetails: temp})
          })
        })
      })
    })
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    console.log(this.state);
    const { pokemonDetails, searchField } = this.state;

    const filteredPokemons = pokemonDetails.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className = 'App'>
        <h1>Pokedex</h1>
        <SearchBox
          placeholder='Search Pokemons'
          handleChange={this.handleChange}
        />
        <CardList pokemons= {filteredPokemons}>
        </CardList>


      </div>
      
    )
  }
}
export default App;