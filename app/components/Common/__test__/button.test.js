import React from 'react'

import { Button } from '../'

describe('<Button />', () => {
  global.console = { error: jest.fn() }

  const doShallow = (overrides = {}) => {
    const button = shallow(<Button {...overrides}>Submit</Button>)
    return button
  }

  it('renders', () => {
    const button = doShallow()
    expect(button).toMatchSnapshot()
  })

  it('should have the size small as default', () => {
    let button = doShallow()
    expect(button).toHaveClassName('custom-button', 'small')
  })

  it('should not be allowed to render without children', () => {
    shallow(<Button />)
    expect(console.error).toHaveBeenCalled()
  })

  it('should be able to inject new props or attributes', () => {
    let button = doShallow({ name: 'btn' })
    expect(button).toHaveProp('name', 'btn')
  })

  it('should be able to disable', () => {
    let button = doShallow({ disabled: true })
    expect(button).toHaveProp('disabled')
  })
})
