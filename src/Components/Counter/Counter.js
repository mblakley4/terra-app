import React from 'react'
import Config from '../../config'
import PledgesContext from '../../PledgesContext'
import './Counter.css'

const likeDisplay = () => {

}

class Counter extends React.Component {
  static contextType = PledgesContext

  constructor(props){

    super(props);
    this.state = {
      id: '',
      likes: 0,
      error: null,
      updated: false,
    }
  }

  updateLikes = () => {
    console.log('likes are:', this.props.likes)
    if(!this.state.updated) {
      this.setState({
          id: this.props.id,
          likes: this.props.likes + 1,
          updated: true
      })

    const { id, likes } = this.state
    const updatedPledge = { id, likes }
    const  pledgePatch = { likes }
    console.log(pledgePatch);

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
  }

  render() {
    const likeDisplay = this.state.updated ? this.state.likes : this.props.likes
    return (
        <div className='counter'>
          <button
          className='counterBtn'
          onClick={this.updateLikes}
          >
            <span role="img" aria-label="thumbs-up"> 👍 </span>
          </button>
          <p>{ likeDisplay }</p>
        </div>
    )
  }
}


export default Counter
