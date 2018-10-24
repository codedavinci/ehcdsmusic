import React from 'react'
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

export default Home
