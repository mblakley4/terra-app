import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <header role='banner'>
        <div className='card'>
          <h1 className="side">
            The<em> Terra </em>Project
          </h1>
          <div className='subTitles side back'>
            <h2>Servo Terra Nostra!</h2>
              <p><em> "Save Our Earth!" </em></p>
          </div>
        </div>
      </header>
    );
  }
}
