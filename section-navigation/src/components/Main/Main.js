import React from 'react'


import './styles.scss'
import CharactersList from '../CharactersList'
import Characters from '../Characters'


const Main = () => {
    return (
        <main>
            <CharactersList />
            <Characters />
        </main>
    )
}

export default Main;