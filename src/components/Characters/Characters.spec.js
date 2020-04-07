import React from 'react'
import { render } from 'enzyme'
import Characters  from './Characters'

describe('Characters', () => {
    const props = {
        characters: [], 
        refs: [],
    }

    const characters = render(<Characters {...props} />)
    
    it('renders characters', () => {
        expect(characters.find('.characters-content__character')).toHaveLength(props.characters.length)
    })
})