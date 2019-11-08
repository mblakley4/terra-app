import React, { Component } from 'react'
import PledgesContext from '../../PledgesContext'
import './DataPoints.css'

const countNumberOfUsers = (pledges=[]) =>
  pledges.length

const sumOfPledgedDays = (pledges=[]) => {
  const pledgeSum = pledges.reduce((prev, cur) =>
    prev + cur.days, 0)
    return pledgeSum
}

const pwbSaved = (days) => {
  // 0.44 = avg PWB user per person per day
  const savedBottes = (days * 0.44)
  return Math.round(savedBottes)
}

const pwbWeightSaved = (pwbSaved) => {
  // 0.05254 = avg PWB weight in lbs
  const savedBotteWeight = pwbSaved * 0.05254
  return Math.round(savedBotteWeight)
}

export default class DataPoints extends Component {
  static contextType = PledgesContext

  render() {
    const { pledges } = this.context
    const pledgeSum = sumOfPledgedDays(pledges)
    const savedBottes = pwbSaved(pledgeSum)
    const savedBotteWeight = pwbWeightSaved(savedBottes)

    return (
        <section className='dataBoxes'>

          <div className='dataBox box1'>
            <span className='box-text'>
              WE'VE PLEDGED <br />
              <span className='bigNum'>
                {pledgeSum} <br />
              </span>
              {' '}DAYS!!! <br />
            </span>
            (from {countNumberOfUsers(pledges)} people)
          </div>

          <div className='dataBox box2'>
            <span className='box-text'>
              WE'VE SAVED <br />
              <span className='bigNum'>
                {savedBottes} <br />
              </span>
              PWB!!! <br />
            </span>
            (Plastic Water Bottles)
          </div>

          <div className='dataBox box2'>
            <span className='box-text'>
              WE DID'T NEED <br />
              <span className='bigNum'>
                {savedBotteWeight} <br />
              </span>
              POUNDS OF PLASTIC!!!
            </span>
          </div>

        </section>
    );
  }
}
