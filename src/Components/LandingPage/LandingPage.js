import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import graph from '../../images/global-plastics-production.png'
import ourWaterways from '../../images/our-waterways.jpg'
import plasticAlley from '../../images/plastic-alley.jpg'
import hero from '../../images/hero.jpg'
import pacificGarbagePatch from '../../images/Pacific-Garbage-Patch.jpg'
import './LandingPage.css'


export default class LandingPage extends Component {
  render() {
    return (
      <div className='landingPage-container'>
        <div className='landingPage-view'>
          <img src={hero} alt="mountains, green pines, and blue water" className='hero'/>
          <Header />
          <button>
            <Link to={'/PledgeFormPage'}>
              PLEDGE NOW
            </Link>
          </button>
            <button>
              <Link to={'/PledgeListPage'}>
                SEE PLEDGES!
            </Link>
          </button>
          <h3>How many days can you go without using a plastic water bottle?</h3>
        </div>

          <section className='mission'>
            <h2>Mission</h2>
            <p className="BLUF"><strong>Reduce plastic water bottle (PWB) use.</strong></p>
            <p>Through shared awareness and reduced usage we will reverse the upward trend of overall
            plastic production and the subsequent detrimental effects they have on our environment.</p>
          </section>

        <section className='why-section'>
          <h3>Why Plastic Water Bottles?</h3>
          <h4>USE LESS, PRODUCE LESS</h4>
          <p><em>On average, Americans use 13 water bottles per month and only recycle
          about 23% of those water bottles.
          We also don't need an island, bigger than Texas, made of plastic and trash in the
          Pacific Ocean.</em></p>
          <img src={ourWaterways} alt="plastic floating in water" className='our-waterways'/>
          <img src={pacificGarbagePatch} alt="an island of plastic trash in the Pacific Ocean" className='pacificGarbagePatch'/>
          <h4>Upward Trend of Plastic Production</h4>
          <img src={graph} alt="plastice production trend graph" className='plastic-trend-graph'/>
        </section>

        <section className='planning-section'>
          <h3>Yes!!  You too can go without plastic water bottles!</h3>
          <img src={plasticAlley} alt="wooded path filled with plastic" className='plasticAlley' />
            <h5>Here's some easy tips for a successful pledge:</h5>
            <ul>
              <li>Pick your favorite reusable water container</li>
              <li>Get several containers of varying size & type</li>
              <li>Plan Ahead - Take your water with you.</li>
              <li>Get a water filter at your house so you have great tasting water</li>
              <li>Keep your containers clean</li>
            </ul>
        </section>

        <section className='ready-section'>
          <h3>Are you ready?</h3>
          <p>Join the team and take a pledge today!</p>
          <button>
            <Link to={'/PledgeFormPage'}>
              PLEDGE NOW
            </Link>
          </button>
        </section>
        <Footer />
      </div>
    );
  }
}
