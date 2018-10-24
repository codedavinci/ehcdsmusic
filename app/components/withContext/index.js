import React from 'react'
import { ArtistConsumer } from '../Main'

export default function(Component, context) {
  return function ConnectedComponent(props) {
    return (
      <ArtistConsumer>
        {data => {
          let newContext = {}

          if (context.constructor === Array) {
            context.reduce((acc, value) => {
              acc[value] = data[value]
              return acc
            }, newContext)
          } else {
            newContext[context] = data[context]
          }

          return React.createElement(Component, { ...props, ...newContext })
        }}
      </ArtistConsumer>
    )
  }
}
