import React from 'react'
import PropTypes from 'prop-types'

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

Ratings.propTypes = {
  popularity: PropTypes.number,
}

Ratings.defaultProps = { popularity: 0 }

export default Ratings
