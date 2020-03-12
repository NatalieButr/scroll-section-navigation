import React, {createRef} from 'react'
import {useSelector, useDispatch} from 'react-redux';

import './styles.scss'
import CharactersList from '../CharactersList'
import Characters from '../Characters'


const Main = () => {

    const dispatch = useDispatch()
    const characters = useSelector(state =>state.characters.characters)
    const refs = characters.reduce((refsObj, character) => {
        refsObj[character.name] = createRef();
        return refsObj;
      }, {});

      

      const handleClick = (name) => {
          dispatch({ type: 'SET_ACTIVE_CHARACTER', payload: {name: name, click: true} })
          refs[name].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      };
    return (
        <main>
            <CharactersList handleClick={handleClick} characters={characters}/>
            <Characters refs={refs} characters={characters} />
        </main>
    )
}

export default Main;