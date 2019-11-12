import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
            <li>
              <a
                href='mailto:m.blakley@icloud.com'
                target='_blank'
                rel="noopener noreferrer"
              >
                Email the Developer
              </a>
            </li>
            <li>
              <a
                href='https://github.com/mblakley4'
                target='_blank'
                rel="noopener noreferrer"
              >
                See the Code on GitHub
              </a>
            </li>
        </ul>
        © Michael Blakley, 2019
      </footer>
    );
  }
}
