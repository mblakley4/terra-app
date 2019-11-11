import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PledgesContext from '../../PledgesContext'
import ValidationError from './ValidationError'
import Config from '../../config'
import './PledgeForm.css'

export default class PledgeForm extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  state = {
    name: {
      value: '',
      touched: false
    },
    location: {
      value: '',
      touched: false
    },
    days: {
      value: 'null',
      touched: false
    },
    error: null,
    redirect: false,
  };

  static contextType = PledgesContext;

  handleSubmit = e => {
    e.preventDefault()
    const pledge = {
      name: this.state.name.value,
      location: this.state.location.value,
      days: this.state.days.value
    }

    fetch(`${Config.API_BASE_URL}/pledges`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(pledge),
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          throw error
        })
      }
      return res.json()
    })
    .then (pledge => {
      this.context.addPledge(pledge)
      this.setState({
        redirect: true
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  validateName(fieldValue) {
    const name = this.state.name.value.trim();
    if (name.length <= 2 ) {
      return 'A name is required'
    }
  }

  validateLocation(fieldValue) {
    const location = this.state.location.value.trim();
    if (location.length <= 2) {
      return 'A location is required'
    }
  }

  updatePledgeName(name) {
    this.setState({name: {value: name, touched: true}});
  }

  updatePledgeLocation(location) {
    this.setState({location: {value: location, touched: true}});
  }

  updatePledgeDays(days) {
    this.setState({days: {value: days, touched: true}});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/PledgeListPage'} />
    }

    const { error } = this.state
    return (
      <div className='pledgeForm-container'>
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
                aria-required="true"
                aria-label="Name"
                onChange={e => this.updatePledgeName(e.target.value)}
                required
              />
              {this.state.name.touched && (<ValidationError message={this.validateName()}/> )}
          </div>
          <div className='form-section'>
            <label htmlFor='location'>Where are you from:</label>
              <input
                type='text'
                name='location'
                placeholder='Florida, Houston, etc.'
                aria-required="true"
                aria-label="Location"
                onChange={e => this.updatePledgeLocation(e.target.value)}
                required
              />
              {this.state.location.touched && (<ValidationError message={this.validateLocation()}/> )}
          </div>
          <div className='form-section'>
            <label htmlFor="pledgeDays">How many days will you go water bottle free?</label>
              <input
                type='number'
                name='pledgeDays'
                placeholder='30'
                aria-required="true"
                aria-label="Pledge Days"
                onChange={e => this.updatePledgeDays(e.target.value)}
                required
              />
          </div>
          <button
            type="submit"
            className="pledge-button"
            disabled={
              this.validateName() ||
              this.validateLocation() }
          >
          Submit</button>
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
