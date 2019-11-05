import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PledgeList from '../PledgeList/PledgeList'
import DataPoints from  '../DataPoints/DataPoints'
import Footer from '../Footer/Footer'
import './PledgePage.css'

export default class PledgePage extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>
          <h1 className='home_title'> The <em> Terra </em> Project </h1>
        </Link>
        <DataPoints />
        <button>
          <Link to={'/PledgeFormPage'}>
            PLEDGE NOW
          </Link>
        </button>
        <button>
          <Link to={'/'}>
            HOME
          </Link>
        </button>
        <PledgeList />
        <Footer />
      </div>
    );
  }
}
