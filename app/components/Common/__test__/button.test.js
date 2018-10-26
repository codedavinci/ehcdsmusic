import React from 'react'

import { Button } from '../'

describe('<Button />', () => {
  const doShallow = (overrides = {}) => {
    const button = shallow(<Button {...overrides}>Submit</Button>)

    return button
  }

  it('renders', () => {
    const button = render(<Button>Submit</Button>)
    expect(button).toMatchSnapshot()
  })

  it('should have the size small as default', () => {
    let button = doShallow()
    expect(button).toHaveProp('size', 'small')
  })
})
