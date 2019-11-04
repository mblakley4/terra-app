import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
      <header role='banner'>
        <h1>
          The<em> Terra </em>Project
        </h1>
        <div className='subTitles'>
          <h2>Servo Terra Nostra!</h2>
            <p><em> "Save Our Earth!" </em></p>
        </div>
      </header>
      </div>
    );
  }
}
