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
          <div className='pledgeText-container'>
            <p>{this.props.name} from {this.props.location} just took a pledge
            for {this.props.days} days!
            <Cheers />
            </p>
          </div>
          <Counter
            key={this.props.id}
            id={this.props.id}
            likes={this.props.likes}
            name={this.props.name}
            location={this.props.location}
            days={this.props.days}
          />
        </li>
      )}
    </PledgesContext.Consumer>
    );
  }
}
