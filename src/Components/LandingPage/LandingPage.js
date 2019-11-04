import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        
        <section>
          <h3>Mission</h3>
          <p>Reduce usage of plastic water bottles through awareness & reverse the upward trend of overall plastic production.</p>
          <button>
            <Link to={'/PledgeFormPage'}>
              PLEDGE NOW
            </Link>
          </button>
        </section>

        <section>
          <h3>What's the Big Deal?</h3>
          <img src="not yet" alt="the make you feel bad for using too much plastic...." />
          <p><em>[placeholder paragraph/bullets about the trending up increase in plastice production, the degradation time of plastic...and that it never truly degrades, and effects to our ocean e.g. The Great Pacific Garbage Patch.]</em></p>
          <h4>Plastic Production Graph(s)</h4>
          <img src="graph" alt="plastice production trend graph" />
        </section>

        <section>
          <h3>Yes!!</h3>
          <h3>You too can go without plastic water bottles!</h3>
            <ul>Here's some easy tips for a successful pledge:
              <li>Pick your favorite reusable water container</li>
              <li>Get several containers of varying size & type</li>
              <li>Plan Ahead - Take your water with you.</li>
              <li>Get a water filter at your house, if you don't already so you have great tasting water</li>
              <li>Keep your containers clean</li>
            </ul>
        </section>

        <section>
          <h3>Are you ready to take one small step in the right direction?</h3>
          <p>Join the other (# of pledges) people and take a pledge today.</p>
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
