import React from 'react'

import Layout from '../Layout'

describe('<Layout />', () => {
  const doShallow = (overrides = {}) => {
    const layout = shallow(<Layout {...overrides}>children</Layout>)
    return layout
  }

  it('renders', () => {
    const layout = doShallow()
    expect(layout).toMatchSnapshot()
  })

  it('should contain a full width scale - viewport', () => {})
  it('should render a full width header', () => {})
  it('should not render st', () => {})
})
