import React from 'react';
import './card-list.style.css'
import {Card} from '../card/card.component';

export const CardList = props => {
    return (
        <div className="card-list">
        {   
            props.pokemons.map((pokemon,index) => (
            <Card key={pokemon.id} pokemon = {pokemon}></Card>
        ))
          }
        </div>
    )
}