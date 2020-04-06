import React from 'react'
import { shallow } from 'enzyme'
import Header  from './Header'

describe('Header', () => {
    it('renders <header>', () => {
        const header = shallow(<Header />)
        expect(header.find('header')).toHaveLength(1)
    })
})