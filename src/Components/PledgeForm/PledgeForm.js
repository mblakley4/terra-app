import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './PledgeForm.css'

export default class PledgeForm extends Component {
  render() {
    return (
      <div>
        <header className='pledgeHeader' role='banner'>
          <h1>Take a Pledge!</h1>
        </header>
      <form>
        <div class='form-section'>
          <label for='screen-name'>Enter a Screen Name:</label>
            <input type="text" name='screen-name' placeholder='Mike B' required />
        </div>
        <div class='form-section'>
          <label for='location'>Where are you from:</label>
            <input type='text' name='location' placeholder='Florida, Houston, etc.' required />
        </div>
        <div class='form-section'>
          <label for="pledge-days">How many days will you go water bottle free?</label>
            <input type='number' name='pledge-days' placeholder='30' />
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button>
          <Link to={'/'}>
            Cancel
          </Link>
          </button>
      </form>
      </div>
    );
  }
}
