import React from 'react'
import { connect } from 'react-redux'


import './styles.scss'
import Character from './Character'


const Characters = (props) => {

    const { characters } = props;

    return (
        <div className='characters-content'>
           {characters.map((character, i) => <Character key={i} character={character}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    characters: state.characters.characters,
})
export default connect(
    mapStateToProps,
  )(Characters)