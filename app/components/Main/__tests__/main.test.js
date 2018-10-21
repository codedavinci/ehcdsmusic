import React from 'react'

import Main from '../Main'

describe('<Main />', () => {
  const doShallow = (overrides = {}) => {
    const main = shallow(<Main {...overrides}>children</Main>)
    return main
  }

  it('renders', () => {
    const main = doShallow()
    expect(main).toMatchSnapshot()
  })
})