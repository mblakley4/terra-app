import React, { Component } from 'react'
import PledgeList from '../PledgeList/PledgeList'
import DataPoints from  '../DataPoints/DataPoints'
import Footer from '../Footer/Footer'
import './PledgePage.css'

export default class PledgePage extends Component {
  render() {
    return (
      <div>
        <h2>Pledge Page</h2>
        <DataPoints />
        <PledgeList />
        <Footer />
      </div>
    );
  }
}
