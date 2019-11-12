import React, { Component } from 'react'
import PledgeItem from '../PledgeItem/PledgeItem'
import PledgesContext from '../../PledgesContext'
import './PledgeList.css'

export default class PledgeList extends Component {
  static contextType = PledgesContext;
  static defaultProps = {
    pledges: []
  };

  render() {
    const { pledges } = this.context
    const sortedPledges = pledges.sort((a, b) => b.id - a.id)
    const latestPledges = sortedPledges.slice(0, 10)
    return (
      <div className='pledgeList-container'>
        <h3>Here's our latest Pledges!</h3>
        <ul className='pledgeList'>
          {latestPledges.map(pledge =>
            <PledgeItem
              key={pledge.id}
              {...pledge}
            />
          )}
        </ul>
      </div>
    );
  }
}
