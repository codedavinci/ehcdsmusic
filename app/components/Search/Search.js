import React, { Component } from 'react'

import { Button } from '../Common'
import './search.css'

import PropTypes from 'prop-types'

const Search = ({ handleSearch }) => {
  let Input

  const onSubmit = e => {
    e.preventDefault()
    if (Input.value) {
      handleSearch(Input.value)
    }
  }

  return (
    <div className="search-wrapper">
      <form onSubmit={onSubmit}>
        <input type="text" ref={e => (Input = e)} />
        <Button type="submit">SEARCH</Button>
      </form>
    </div>
  )
}

Search.propType = {
  onSubmitSearch: PropTypes.func.isRequired,
}

export default Search
