import React, { Component } from 'react'
import PledgesContext from '../../PledgesContext'
import './PledgeItem.css'

export default class PledgeItem extends Component {
  render() {
    return (
      <PledgesContext.Consumer>
      {(context) => (
        <li className='pledgeItem'>
          <p>{this.props.name} from {this.props.location} just took a pledge
          for {this.props.pledgeDays} days!</p>
        </li>
      )}
    </PledgesContext.Consumer>
    );
  }
}
