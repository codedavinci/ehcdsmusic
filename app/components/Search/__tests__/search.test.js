import React from 'react'

import Search from '../Search'

describe('<Search />', () => {
  const defaultProps = {
    handleSearch: jest.fn(),
  }

  const doShallow = (overrides = {}) => {
    const search = shallow(<Search {...overrides} />)

    return search
  }

  it('renders', () => {
    const search = doShallow(defaultProps)
    expect(search).toMatchSnapshot()
  })
})
