import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className = 'card-container'>
    {console.log(props.pokemon.index)}
    <img alt="pokemon" src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`} />
        <h2> {props.pokemon.name}</h2>
        <li>{props.pokemon.abilities && props.pokemon.abilities.map((abilityObject) => 
        abilityObject.ability.name).join(', ')}</li>
    </div>
)