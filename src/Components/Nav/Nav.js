import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav role='navigation'>
          <Link to={'/PledgeListPage'}>
            SEE PLEDGES!
          </Link>
      </nav>
    );
  }
}
