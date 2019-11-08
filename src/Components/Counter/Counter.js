import React from 'react'
import Config from '../../config'
import PledgesContext from '../../PledgesContext'
import './Counter.css'

class Counter extends React.Component {
  static contextType = PledgesContext

  constructor(props){

    super(props);
    this.state = {
    id: this.props.id,
    likes: this.props.likes,
    error: null,
    updated: false,
    touched: false,
    }
  }

  updateLikes = () => {
    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
          touched: true
        }
      })
      this.handlePatchLikes()
    }
  }

  handlePatchLikes = () => {
    const { id, likes } = this.state
    const updatedPledge = { id, likes }
    const  pledgePatch = { likes }
    fetch(`${Config.API_BASE_URL}/pledges` + `/${id}`, {
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
    console.log(this.state.likes);
  }

  render() {
    return (
        <div className='counter'>
          <button
          className='counterBtn'
          onClick={this.updateLikes}
          >
            <span role="img" aria-label="thumbs-up"> 👍 </span>
          </button>
          <p>
            {
              !this.state.touched && this.props.likes
              ||
              this.state.touched && this.state.likes
            }
          </p>
        </div>
    )
  }
}


export default Counter
