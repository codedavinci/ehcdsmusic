import React from 'react'

import './ratings.css'

const Ratings = ({ popularity }) => {
  return (
    <div className="ratings">
      {[1, 2, 3, 4, 5].map(i => {
        return <i className="fas fa-star color" key={i} />
      })}
    </div>
  )
}

export default Ratings
