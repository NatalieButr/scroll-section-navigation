import React from 'react';

import TrackVisibility from '../../TrackVisibility';
import './styles.scss'

const Character = (props) => {
    const {character, refs} = props;

    return (
        <TrackVisibility name={character.name} refs={refs}>
            <div className='characters-content__character'>
                <div className='character_column photo_block'>
                    <div className='image photo_block'>
                        <img src={`${character.image}`} alt={`${character.name}`} />
                    </div>
                    <h2 className='text photo_block'>{character.name}</h2>
                </div>
                <div className='character_column information_block'>
                    <p className='text information_block__text'>House: {character.house}</p>
                    <p className='text information_block__text'>Ancestry: {character.ancestr}</p>
                    <p className='text information_block__text'>Date of Birth: {character.dateOfBirth} </p>
                    <p className='text information_block__text'>Gender: {character.gender}</p>
                    <p className='text information_block__text'>Eyes: {character.eyeColour}</p>
                    <p className='text information_block__text'>Hair: {character.hairColour}</p>
                </div>
             </div>
        </TrackVisibility>
    )
     
}

export default Character;