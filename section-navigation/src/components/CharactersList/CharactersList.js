import React from 'react'
import {useSelector} from 'react-redux';

import './styles.scss'


const CharactersList = ({ handleClick}) => {


    const characters = useSelector(state =>state.characters.characters)
    const activeCharacter = useSelector(state => state.characters.activeCharacter)

    return (
        <div className='characters-navigation'>
            <ul className='characters-navigation__wrapper'>
             {characters.map((character, i) =>
              <li key={i} 
                  onClick={() => handleClick(character.name)} 
                  className={`text characters-navigation_link ${activeCharacter === character.name ? 'link--active' : ''}`}>
                  {character.name}     </li>)}
            </ul>
        </div>
    )
}


export default CharactersList;