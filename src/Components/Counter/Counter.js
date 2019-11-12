import React from 'react'
import Config from '../../config'
import PledgesContext from '../../PledgesContext'
import './Counter.css'


class Counter extends React.Component {
  static contextType = PledgesContext

  constructor(props){

    super(props);
    this.state = {
      id: '',
      likes: 0,
      name: '',
      location: '',
      days: '',
      error: null,
      updated: false,
    }
  }

  updateLikes = () => {
    if(!this.state.updated) {
        this.setState({
          id: this.props.id,
          likes: this.props.likes + 1,
          name: this.props.name,
          location: this.props.location,
          days: this.props.days,
          updated: true
        }, () => {
          this.makeApiCall()
        })
    }
  }


  makeApiCall = () => {
   const { id, likes, name, location, days } = this.state
    const updatedPledge = { id, likes, name, location, days }
    const  pledgePatch = { likes }

    fetch(`${Config.API_BASE_URL}/pledges/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(pledgePatch),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(error => Promise.reject(error))
    })
    .then(() => {
      this.context.updatePledge(updatedPledge)
    })
    .catch(error => this.setState({ error }))
}

  render() {
    const likeDisplay = this.state.updated ? this.state.likes : this.props.likes
    return (
      <div className='counter-container'>
        <div className='counter'>
          <button
          className='counterBtn'
          onClick={this.updateLikes}
          >
            <span role="img" aria-label="thumbs-up" className='thumbs-up'> 👍 </span>
          </button>
          <p>{ likeDisplay }</p>
        </div>
      </div>
    )
  }
}


export default Counter
