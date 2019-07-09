import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App(props) {

  // Definition of state and the function to update it.
  const [count, updateCount] = useState(0);
  const [pokemon, updatePokemon] = useState({});
  const [pokemonList, updatepokemonList] = useState([]);
  
  // This just a function the runs on click. 
  const handleCount = () => {
    // runs the "updater" for the count state;
    updateCount(count + 1);
  }

  useEffect( ()=>{
    const getStuff = async () => {
      const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
      updatePokemon(pokemon.data);
    }
    getStuff();
  })

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{pokemon.name}</h1>
      <button onClick={handleCount}>Count</button>
    </div>
  );
}

export default App;
