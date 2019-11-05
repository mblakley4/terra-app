import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PledgesContext from '../../PledgesContext'
import Header from '../Header/Header'
import './PledgeForm.css'

export default class PledgeForm extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  static contextType = PledgesContext;

  state = {
    error: null,
    redirect: false,
  };

  handleSubmit = e => {
    e.preventDefault()
    const { name, location, pledgeDays } = e.target
    const pledge = {
      name: name.value,
      location: location.value,
      pledgeDays: pledgeDays.value
    }
    this.context.addPledge(pledge)
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/PledgeListPage'} />
    }

    const { error } = this.state
    return (
      <div className='pledgeForm-container'>
        <Header />
      <form onSubmit={this.handleSubmit}>
        <div className='form-container'>
        <fieldset>
        <legend>Take your Pledge!</legend>
        <div className='TakePledge_error' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
          <div className='form-section'>
            <label htmlFor='name'>Enter a Screen Name:</label>
              <input
                type="text"
                name='name'
                placeholder='Mike B'
                required
              />
          </div>
          <div className='form-section'>
            <label htmlFor='location'>Where are you from:</label>
              <input
                type='text'
                name='location'
                placeholder='Florida, Houston, etc.'
                required
              />
          </div>
          <div className='form-section'>
            <label htmlFor="pledgeDays">How many days will you go water bottle free?</label>
              <input
                type='number'
                name='pledgeDays'
                placeholder='30'
                required
              />
          </div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button>
            <Link to={'/'}>
              Cancel
            </Link>
          </button>
        </fieldset>
        </div>
      </form>
      </div>
    );
  }
}
