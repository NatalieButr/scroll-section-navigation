import React from 'react';


import './styles.scss'
import Character from './Character'


const Characters = (props) => {

    const { characters, refs } = props;

    return (
        <div className='characters-content'>
           {characters.map((character, i) => <Character key={i} character={character} refs={refs}/>)}
        </div>
    )
}

export default Characters