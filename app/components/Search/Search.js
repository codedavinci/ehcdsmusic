import React, { Component } from 'react'
import './search.css'

import PropTypes from 'prop-types'

const Search = ({ onSubmitSearch }) => {
  let Input

  const onSubmit = e => {
    e.preventDefault()
    if (Input.value) {
      onSubmitSearch(Input.value)
    }
  }

  return (
    <div className="search-wrapper">
      <form onSubmit={onSubmit}>
        <input type="text" ref={e => (Input = e)} />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  )
}

Search.propType = {
  onSubmitSearch: PropTypes.func.isRequired,
}

export default Search
