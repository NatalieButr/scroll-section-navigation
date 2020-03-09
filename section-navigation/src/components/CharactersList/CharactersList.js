import React from 'react'
import { connect } from 'react-redux'
//inport {Link} from 'react-dom'

import './styles.scss'


const CharactersList = (props) => {

    const { characters } = props;
     console.log(characters)
    return (
        <div className='characters-navigation'>
            <div className='characters-navigation__wrapper'>
                {characters.map((character, i) => <a key={i} href='#' className='text characters-navigation_link'>{character.name}</a>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    characters: state.characters.characters,
})
export default connect(
    mapStateToProps,
  )(CharactersList)