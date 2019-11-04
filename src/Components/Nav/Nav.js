import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav role='navigation'>
        <button>
          <Link to={'/PledgeListPage'}>
            SEE PLEDGES!
          </Link>
        </button>
      </nav>
    );
  }
}
