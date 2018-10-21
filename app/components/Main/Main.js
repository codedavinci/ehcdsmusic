import React, { Component } from 'react'
import { Layout } from '../Layout'
import { Search } from '../Search'
import './main.css'

class Main extends Component {
  state = {
    msg: 'BOOTSTRAP THE PROJECT',
  }

  render() {
    return (
      <Layout>
        <div className="main">
          <Search />
        </div>
      </Layout>
    )
  }
}

export default Main
