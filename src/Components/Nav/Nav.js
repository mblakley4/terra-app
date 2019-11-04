import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav role='navigation'>
        <header role='banner'>
          <h1>
            The
            <em> Terra </em>
            Project
          </h1>
        </header>
        <button>
          <Link to={'/PledgeListPage'}>
            SEE PLEDGES!
          </Link>
        </button>
      </nav>
    );
  }
}
