import React, { Component } from 'react'
import { Layout } from '../Layout'
import './main.css'

class Main extends Component {
  state = {
    msg: 'BOOTSTRAP THE PROJECT',
  }

  render() {
    return (
      <Layout>
        <div>APP'LL BE RUNNING HERE</div>
      </Layout>
    )
  }
}

export default Main
