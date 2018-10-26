import React from 'react'
import PropTypes from 'prop-types'

import { Search } from '../Search'
import ArtistList from '../ArtistList'

import './home.css'

const Home = ({ handleSearch }) => {
  return (
    <div className="main">
      <Search handleSearch={handleSearch} />
      <ArtistList />
    </div>
  )
}

Home.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Home
