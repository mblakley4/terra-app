import React, { Component } from 'react'
import PledgesContext from '../../PledgesContext'

const cheers = [
  `Thank you for your support!!`,
  'Good Luck!!',
  'Nice work, we\'ll see you back here for your next pledge!!',
  'Earth thanks you!!',
  'Let\'s give this pledge some cheers!!'
]

export default class Cheers extends Component {

  render() {
    const ranNum = Math.ceil(Math.random() * cheers.length - 1)
    return (
      <div>
      {cheers[ranNum]}
      </div>
    );
  }
}
