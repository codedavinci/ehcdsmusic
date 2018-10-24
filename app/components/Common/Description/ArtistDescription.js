import React from 'react'
import { Followers } from '../'
import './description.css'

const ArtistDescripition = ({ name, followers }) => {
  // console.log("THAT's EVERYTHING", props)
  return (
    <div className="desc-wrapper">
      <div className="text artist">{name}</div>
      <Followers followers={followers} />
    </div>
  )
}

export default ArtistDescripition
