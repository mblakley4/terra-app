import React, { Component } from 'react'
import PledgesContext from '../../PledgesContext'
import Counter from '../Counter/Counter'
import Cheers from '../Cheers/Cheers'
import './PledgeItem.css'

export default class PledgeItem extends Component {
  render() {
    return (
      <PledgesContext.Consumer>
      {(context) => (
        <li className='pledgeItem' key={this.props.id}>
          <p>{this.props.name} from {this.props.location} just took a pledge
          for {this.props.days} days!
          </p>
          <Cheers />
          <Counter
            id={this.props.id}
            likes={this.props.likes}
          />
        </li>
      )}
    </PledgesContext.Consumer>
    );
  }
}
