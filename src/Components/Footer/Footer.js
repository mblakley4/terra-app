import React, { Component } from 'react'
import email from '../../images/email.png'
import github from '../../images/github.png'
import twitter from '../../images/twitter.png'
import linkedIn from '../../images/linkedIn.png'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>Update me.
            <li>
              <a
                href='mailto:m.blakley@icloud.com'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img
                  className="square footer-icon"
                  src={email}
                  alt="email icon"
                />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/mblakley4'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  src={github}
                  alt='github logo'
                />
              </a>
            </li>
            <li>
              <a
                href='https://linkedin.com/in/mblakley'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  src={linkedIn}
                  alt='linked in logo'
                />
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/mblakley4'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  src={twitter}
                  alt='twitter logo'
                />
              </a>
            </li>
        </ul>
      </footer>
    );
  }
}
